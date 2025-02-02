"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Template } from "@/types/type";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ContentFormSection({
  selectedTemplate,
  onChange
}: {
  selectedTemplate: Template;
  onChange: (content: string) => void;
}): React.JSX.Element {
  const formSchema = z.object(
    Object.fromEntries(
      selectedTemplate.form.map((item) => [
        item.name,
        item.required
          ? z.string().nonempty("This field is required")
          : z.string().optional(),
      ]),
    ),
  );

  const token = localStorage.getItem("token");
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("data\n", data);
    try {
      const submitDataFormat = {
        topic: data.input || "" ,
        outline: data.textarea || "",
        template: selectedTemplate.slug,
        category: selectedTemplate.category,
        aiPrompt: selectedTemplate.aiPrompt,
      };
      
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/content/create-content`,
        submitDataFormat,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        console.log("response.data.aiResponse\n", response.data);
       onChange(response.data.aiResponse);
      }

     
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className='p-4 rounded-xl flex flex-col gap-4 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-supernova-700'>
      <Image
        src={selectedTemplate.icon}
        alt={selectedTemplate.name}
        width={64}
        height={64}
      />
      <h1 className='text-3xl font-bold text-supernova-300'>
        {selectedTemplate.name}
      </h1>
      <p className='text-sm text-neutral-500'>{selectedTemplate.desc}</p>

      <form
        className='space-y-4 mt-6'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {selectedTemplate.form.map((item) => (
          <div key={item.name} className='mt-2 mb-8 flex flex-col gap-2'>
            <label
              htmlFor={item.name}
              className='block text-sm font-montserrat'
            >
              {item.label}
              {item.required && <span className='text-red-500 ml-1'>*</span>}
            </label>

            {item.field === "input" ? (
              <Input
                {...register(item.name)}
                id={item.name}
                placeholder='Enter your text here'
                type='text'
                aria-invalid={errors[item.name] ? "true" : "false"}
                className={errors[item.name] ? "border-red-500" : ""}
              />
            ) : (
              <Textarea
                {...register(item.name)}
                id={item.name}
                placeholder='Enter your text here'
                aria-invalid={errors[item.name] ? "true" : "false"}
                className={errors[item.name] ? "border-red-500" : ""}
              />
            )}

            {errors[item.name] && (
              <p className='text-red-500 text-sm mt-1'>
                {errors[item.name]?.message}
              </p>
            )}
          </div>
        ))}

        <Button
          type='submit'
          className='w-full py-4 text-supernova-950 hover:text-supernova-500'
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting ? "Generating..." : "Generate"}
        </Button>
      </form>
    </div>
  );
}

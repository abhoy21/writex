"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FormFieldConfig {
  label: string
  field: string
  name: string
  required?: boolean
  options?: string[]
}

interface TemplateFormProps {
  fields: FormFieldConfig[]
  onSubmit: (data: Record<string, any>) => void
  isLoading?: boolean
}

export function TemplateForm({ fields, onSubmit, isLoading = false }: TemplateFormProps) {
  // Build dynamic schema based on fields
  const schemaFields: Record<string, z.ZodTypeAny> = {}
  
  fields.forEach((field) => {
    const isRequired = field.required ?? false
    
    if (field.field === "number") {
      schemaFields[field.name] = isRequired 
        ? z.string().min(1, `${field.label} is required`).regex(/^\d+$/, "Must be a number")
        : z.string().optional()
    } else {
      schemaFields[field.name] = isRequired 
        ? z.string().min(1, `${field.label} is required`)
        : z.string().optional()
    }
  })

  const formSchema = z.object(schemaFields)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: fields.reduce((acc, field) => {
      acc[field.name] = ""
      return acc
    }, {} as Record<string, string>),
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {fields.map((fieldConfig) => (
          <FormField
            key={fieldConfig.name}
            control={form.control}
            name={fieldConfig.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {fieldConfig.label}
                  {!(fieldConfig.required ?? false) && (
                    <span className="text-muted-foreground ml-1">(Optional)</span>
                  )}
                </FormLabel>
                <FormControl>
                  {fieldConfig.field === "input" ? (
                    <Input 
                      placeholder={`Enter ${fieldConfig.label.toLowerCase()}`}
                      {...field} 
                    />
                  ) : fieldConfig.field === "number" ? (
                    <Input 
                      type="number"
                      placeholder={`Enter ${fieldConfig.label.toLowerCase()}`}
                      {...field} 
                    />
                  ) : fieldConfig.field === "textarea" ? (
                    <Textarea 
                      placeholder={`Enter ${fieldConfig.label.toLowerCase()}`}
                      rows={4}
                      {...field} 
                    />
                  ) : fieldConfig.field === "select" && fieldConfig.options ? (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${fieldConfig.label.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {fieldConfig.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : null}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        
        <Button type="submit" disabled={isLoading} className="w-fit">
          {isLoading ? "Generating..." : "Generate Content"}
        </Button>
      </form>
    </Form>
  )
}

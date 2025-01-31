import templateData from "@/app/(data)/templates";
import ContentFormSection from "@/app/_components/content-form-section";
import ContentResponseSection from "@/app/_components/content-response-section";
import { Button } from "@/components/ui/button";
import { Template } from "@/types/type";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function CreateContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const selectedTemplate = templateData.find(
    (item: Template) => item.slug === slug,
  );

  if (!selectedTemplate) {
    return <div>Template not found</div>;
  }

  return (
    <div>
      <Link href='/dashboard'>
        <Button variant='ghost' className='m-4'>
          <ArrowLeft className='h-4 w-4' />
          Back to Templates
        </Button>
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-5'>
        <ContentFormSection selectedTemplate={selectedTemplate} />
        <div className='col-span-2'>
          <ContentResponseSection />
        </div>
      </div>
    </div>
  );
}

import templateData from "@/app/(data)/templates";
import ContentSection from "@/app/_components/content-section";
import { Button } from "@/components/ui/button";
import { Redirect } from "@/redirect";
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
      <Redirect />
      <Link href='/dashboard'>
        <Button
          variant='ghost'
          className='m-4 text-supernova-500 hover:text-supernova-950'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to Templates
        </Button>
      </Link>

    <ContentSection selectedTemplate={selectedTemplate} />
    </div>
  );
}

import { notFound } from "next/navigation"
import templateData from "@/temlates/templates"
import { TemplatePageClient } from "@/components/dashboard/template-page-client"
import { getContentById } from "@/actions/content"

interface TemplatePageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function TemplatePage({ params, searchParams }: TemplatePageProps) {
  const { slug } = await params
  const { contentId } = await searchParams
  
  // Find template by slug
  const template = templateData.find((t) => t.slug === slug)

  if (!template) {
    notFound()
  }

  let initialContent = null
  if (typeof contentId === 'string') {
    initialContent = await getContentById(contentId)
  }

  return <TemplatePageClient template={template} initialContent={initialContent} />
}
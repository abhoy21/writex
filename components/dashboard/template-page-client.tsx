"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TemplateForm } from "@/components/dashboard/template-form"
import { RichTextEditor } from "@/components/dashboard/rich-text-editor"
import { FileText, Sparkles } from "lucide-react"
import templateData from "@/temlates/templates"
import Image from "next/image"
import { toast } from "sonner"

import { updateContent } from "@/actions/content"
import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"
import { generateAIContent } from "@/actions/ai"

interface TemplatePageClientProps {
  template: typeof templateData[0]
  initialContent?: any
}

export function TemplatePageClient({ template, initialContent }: TemplatePageClientProps) {
  const [generatedContent, setGeneratedContent] = useState(initialContent?.response || "")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const [activeTab, setActiveTab] = useState(initialContent ? "content" : "form")

  const handleFormSubmit = async (data: Record<string, any>) => {
    setIsGenerating(true)
    setGeneratedContent("")
    setActiveTab("content")
    toast.success("Content generation started!")
    
    try {
      const result = await generateAIContent({
        topic: data.topic || data.title || "",
        outline: data.outline || "",
        template: template.name,
        category: template.category,
        aiPrompt: template.aiPrompt,
      })

      if (result.success && result.text) {
        setGeneratedContent(result.text)
        toast.success("Content generated successfully!")
      } else {
        throw new Error(result.error || "Failed to generate content")
      }
    } catch (error) {
      console.error("Error generating content:", error)
      toast.error("Failed to generate content. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSaveChanges = async () => {
    if (!initialContent?.id) return

    setIsSaving(true)
    try {
      await updateContent(initialContent.id, generatedContent)
      toast.success("Content updated successfully!")
    } catch (error) {
      console.error("Error updating content:", error)
      toast.error("Failed to update content")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-6">
      {/* Template Header */}
      <div className="flex items-start gap-4">
        {template.icon && (
          <div className="flex-shrink-0">
            <Image 
              src={template.icon} 
              alt={template.name!} 
              height={48}
              width={48}
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">{template.name}</h1>
          <p className="text-muted-foreground mt-2">{template.desc}</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="form" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Form
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Content
          </TabsTrigger>
        </TabsList>

        <TabsContent value="form" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Input Details</CardTitle>
              <CardDescription>
                Fill in the form below to generate your content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TemplateForm 
                fields={template.form} 
                onSubmit={handleFormSubmit}
                isLoading={isGenerating}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Generated Content</CardTitle>
                <CardDescription>
                  Your AI-generated content will appear here
                </CardDescription>
              </div>
              {initialContent && generatedContent !== initialContent.response && (
                <Button onClick={handleSaveChanges} disabled={isSaving}>
                  {isSaving ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              )}
            </CardHeader>
            <CardContent>
              <RichTextEditor 
                content={generatedContent}
                onChange={setGeneratedContent}
                placeholder="Generated content will appear here after you submit the form..."
                editable={true}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client";
import { Template } from "@/types/type";
import ContentFormSection from "./content-form-section";
import ContentResponseSection from "./content-response-section";
import { useEffect, useState } from "react";

export default function ContentSection({selectedTemplate}: {selectedTemplate: Template}): React.JSX.Element {
  const [content, setContent] = useState<string>("Results will appear here! Thank you for using WriteX");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-5'>
        <ContentFormSection selectedTemplate={selectedTemplate} onChange={handleContentChange} />
        <div className='md:col-span-2'>
          <ContentResponseSection handleContentChange={handleContentChange} content={content} />
        </div>
      </div>
    )
}
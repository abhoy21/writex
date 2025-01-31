"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useRef } from "react";
import RichTextEditor from "./rich-text-editor";

export default function ContentResponseSection() {
  const editorRef = useRef<string>(null);

  const onChange = (content: string) => {
    editorRef.current = content;
  };
  return (
    <div className='bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-4 rounded-xl'>
      <div className='flex items-center justify-between gap-2'>
        <h2>Result</h2>
        <Button
          className='text-supernova-950 hover:text-supernova-500'
          onClick={() => {
            if (editorRef.current) {
              navigator.clipboard.writeText(editorRef.current);
            }
          }}
        >
          <Copy className='h-4 w-4' />
          Copy
        </Button>
      </div>
      <RichTextEditor
        onChange={onChange}
        initialContent='Results will appear here! Thank you for using WriteX'
      />
    </div>
  );
}

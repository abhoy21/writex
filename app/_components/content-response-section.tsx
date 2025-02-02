"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import RichTextEditor from "./rich-text-editor";

export default function ContentResponseSection({handleContentChange, content}: {handleContentChange: (content: string) => void, content: string}): React.JSX.Element {
  return (
    <div className='bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-4 rounded-xl'>
      <div className='flex items-center justify-between gap-2'>
        <h2 className='text-supernova-500 font-montserrat text-xl tracking-widest'>
          Result
        </h2>
        <Button
          className='text-supernova-950 hover:text-supernova-500'
          onClick={() => {
            if (content) {
              navigator.clipboard.writeText(content);
            }
          }}
        >
          <Copy className='h-4 w-4' />
          Copy
        </Button>
      </div>
      <RichTextEditor
        onChange={handleContentChange}     
        initialContent={content}
      />
    </div>
  );
}

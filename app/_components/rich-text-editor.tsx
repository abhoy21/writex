import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextEditorMenuBar from "./text-editor-menu";
import { useEffect } from "react";
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import {common, createLowlight} from 'lowlight'
import { Markdown } from 'tiptap-markdown';
import Typography from '@tiptap/extension-typography';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import Bold from '@tiptap/extension-bold';

type TextEditorProps = {
  onChange: (content: string) => void | Promise<void>;
  initialContent?: string;
};

export default function RichTextEditor({
  onChange,
  initialContent,
}: TextEditorProps) {
  const lowlight = createLowlight(common)
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        codeBlock: false, 
      }),
      Bold.configure({ 
        HTMLAttributes: {
          class: 'text-supernova-100 font-bold',
        },
      }),
      Underline,
      Markdown,
      Typography,
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'python',
        HTMLAttributes: {
          class: 'bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto',
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: 'ml-4',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal ml-4 my-2',
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc ml-4 my-2',
        },
      }),
    ],
    editable: true,
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose sm:prose-sm lg:prose-lg xl:prose-xl min-w-full text-supernova-200  min-h-[200px] overflow-y-auto h-[600px] cursor-text rounded-xl border border-supernova-500/45 p-5 focus:outline-none focus:ring-1 focus:ring-supernova-500/50 focus:border-supernova-500/75 sm:text-sm",
      },
    },
    parseOptions: {
      preserveWhitespace: 'full',
    },
  });

  useEffect(() => {
    if (editor && initialContent !== undefined) {
      const currentContent = editor.getHTML();
      if (currentContent !== initialContent) {
        editor.commands.setContent(initialContent, true, {
          preserveWhitespace: 'full',
        });
      }
    }
  }, [editor, initialContent]);

  
  const editorStyles = `
    .ProseMirror {
      > * + * {
        margin-top: 0.75em;
        color: var(--primary);
      }
      
      h1 {
        font-size: 2em;
        font-weight: bold;
        margin-top: 1em;
        color: var(--primary);
        margin-bottom: 0.5em;
      }

      h2 {
        font-size: 1.5em;
        font-weight: bold;
        color: var(--primary);
        margin-top: 1em;
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: 1.17em;
        font-weight: bold;
        color: var(--primary);
      }

      ul, ol {
        padding: 0 1rem;
      }

      code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
        padding: 0.25rem;
        border-radius: 0.25rem;
      }

      pre {
        background: #0D0D0D;
        color: #FFF;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        
        code {
          color: inherit;
          padding: 0;
          background: none;
          font-size: 0.8rem;
        }
      }

      blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
      }
    }
  `;

  return (
    <div>
      <style>{editorStyles}</style>
      <TextEditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextEditorMenuBar from "./text-editor-menu";
import { useEffect } from "react";


type TextEditorProps = {
  onChange: (content: string) => void | Promise<void>;
  initialContent?: string;
};

export default function RichTextEditor({
  onChange,
  initialContent,
}: TextEditorProps) {

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editable: true,
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] h-[600px] cursor-text rounded-xl border border-supernova-500/45 p-5 focus:outline-none focus:ring-1 focus:ring-supernova-500/50 focus:border-supernova-500/75 sm:text-sm",
      },
    },
    immediatelyRender: true,
  });

  useEffect (() => {
    if (editor && initialContent !== undefined) {
      // Only update if the current content is different from initialContent
      const currentContent = editor.getHTML();
      if (currentContent !== initialContent) {
        editor.commands.setContent(initialContent);
      }
    }
  }, [editor, initialContent]);

  return (
    <div>
      <TextEditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

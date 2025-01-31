import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextEditorMenuBar from "./text-editor-menu";

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
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] h-[600px] cursor-text rounded-xl border border-malachite-500/45 p-5",
      },
    },
    immediatelyRender: true,
  });

  return (
    <div>
      <TextEditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

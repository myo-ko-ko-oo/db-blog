import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import HardBreak from "@tiptap/extension-hard-break";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Underline from "@tiptap/extension-underline";

interface SimpleEditorProps {
  value: string;
  onChange: (content: string) => void;
  darkMode?: boolean; // optional
}

export default function SimpleEditor({
  value,
  onChange,
}: // darkMode,
SimpleEditorProps) {
  const [update, setUpdate] = useState(false); // force re-render
  console.log(update);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2] },
        bulletList: false,
        orderedList: false,
        listItem: false,
        underline: false,
        hardBreak: false,
      }),
      Underline,
      OrderedList.configure({
        HTMLAttributes: { class: "list-decimal ml-2" },
      }),
      BulletList.configure({
        HTMLAttributes: { class: "list-disc ml-2" },
      }),
      ListItem,
      HardBreak,
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    onTransaction: () => setUpdate((u) => !u), // toggle state on every transaction
  });

  if (!editor) return null;

  const isActive = (name: string, attrs: any = {}) =>
    editor.isActive(name, attrs);

  return (
    <div>
      {/* Toolbar */}
      <div className="flex gap-1 mb-2 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 border rounded ${
            isActive("bold") ? "bg-teal-500 text-white" : ""
          }`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 border rounded ${
            isActive("italic") ? "bg-teal-500 text-white" : ""
          }`}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 border rounded ${
            isActive("underline") ? "bg-teal-500 text-white" : ""
          }`}
        >
          U
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-2 py-1 border rounded ${
            isActive("heading", { level: 1 }) ? "bg-teal-500 text-white" : ""
          }`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-2 py-1 border rounded ${
            isActive("heading", { level: 2 }) ? "bg-teal-500 text-white" : ""
          }`}
        >
          H2
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 border rounded ${
            isActive("bulletList") ? "bg-teal-500 text-white" : ""
          }`}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 border rounded ${
            isActive("orderedList") ? "bg-teal-500 text-white" : ""
          }`}
        >
          1. List
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="border p-3 min-h-[150px] prose prose-sm bg-gray-100 dark:bg-slate-700 rounded-md
        prose-ul:list-disc prose-ol:list-decimal"
      />
    </div>
  );
}

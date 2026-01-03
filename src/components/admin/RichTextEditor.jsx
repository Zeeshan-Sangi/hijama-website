import React, { useEffect, useRef, useState } from 'react';

const ToolbarButton = ({ onClick, children, title }) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    className="px-2 py-1 text-sm rounded hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-colors"
  >
    {children}
  </button>
);

const RichTextEditor = ({ value, onChange, placeholder = 'Write your post...' }) => {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const [html, setHtml] = useState(value || '');

  useEffect(() => {
    setHtml(value || '');
  }, [value]);

  const focusEditor = () => {
    if (editorRef.current) editorRef.current.focus();
  };

  const apply = (command, valueArg = null) => {
    focusEditor();
    document.execCommand(command, false, valueArg);
    const newHtml = editorRef.current?.innerHTML || '';
    setHtml(newHtml);
    onChange?.(newHtml);
  };

  const insertNodeAtSelection = (node) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      editorRef.current?.appendChild(node);
      return;
    }
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(node);
    range.setStartAfter(node);
    range.setEndAfter(node);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleInsertImageFromUrl = () => {
    const url = window.prompt('Enter image URL');
    if (!url) return;
    focusEditor();
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Image';
    img.referrerPolicy = 'no-referrer';
    img.loading = 'lazy';
    img.className = 'max-w-full h-auto rounded';
    insertNodeAtSelection(img);
    const newHtml = editorRef.current?.innerHTML || '';
    setHtml(newHtml);
    onChange?.(newHtml);
  };

  const handleInsertImageFromFile = async (file) => {
    if (!file) return;
    // Use data URL instead of uploading to Firebase Storage
    const reader = new FileReader();
    reader.onload = () => {
      focusEditor();
      const img = document.createElement('img');
      img.src = reader.result;
      img.alt = file.name;
      img.loading = 'lazy';
      img.className = 'max-w-full h-auto rounded';
      insertNodeAtSelection(img);
      const newHtml = editorRef.current?.innerHTML || '';
      setHtml(newHtml);
      onChange?.(newHtml);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-50 border-b">
        <ToolbarButton title="Bold" onClick={() => apply('bold')}><strong>B</strong></ToolbarButton>
        <ToolbarButton title="Italic" onClick={() => apply('italic')}><em>I</em></ToolbarButton>
        <ToolbarButton title="Underline" onClick={() => apply('underline')}><span className="underline">U</span></ToolbarButton>
        <div className="w-px h-5 bg-gray-200 mx-1" />
        <ToolbarButton title="Heading 1" onClick={() => apply('formatBlock', 'H1')}>H1</ToolbarButton>
        <ToolbarButton title="Heading 2" onClick={() => apply('formatBlock', 'H2')}>H2</ToolbarButton>
        <ToolbarButton title="Paragraph" onClick={() => apply('formatBlock', 'P')}>P</ToolbarButton>
        <div className="w-px h-5 bg-gray-200 mx-1" />
        <ToolbarButton title="Bulleted List" onClick={() => apply('insertUnorderedList')}>• List</ToolbarButton>
        <ToolbarButton title="Numbered List" onClick={() => apply('insertOrderedList')}>1. List</ToolbarButton>
        <div className="w-px h-5 bg-gray-200 mx-1" />
        <ToolbarButton title="Quote" onClick={() => apply('formatBlock', 'BLOCKQUOTE')}>“”</ToolbarButton>
        <ToolbarButton title="Link" onClick={() => {
          const url = window.prompt('Enter URL');
          if (url) apply('createLink', url);
        }}>Link</ToolbarButton>
        <div className="w-px h-5 bg-gray-200 mx-1" />
        <ToolbarButton title="Insert Image (URL)" onClick={handleInsertImageFromUrl}>Img URL</ToolbarButton>
        <ToolbarButton title="Upload Image" onClick={() => fileInputRef.current?.click()}>Upload Img</ToolbarButton>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleInsertImageFromFile(e.target.files?.[0])}
        />
      </div>

      <div
        ref={editorRef}
        className="min-h-[220px] p-4 focus:outline-none prose max-w-none prose-p:my-3 prose-img:my-3"
        contentEditable
        suppressContentEditableWarning
        placeholder={placeholder}
        onInput={(e) => {
          const newHtml = e.currentTarget.innerHTML;
          setHtml(newHtml);
          onChange?.(newHtml);
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default RichTextEditor;



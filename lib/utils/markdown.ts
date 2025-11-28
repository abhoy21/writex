/**
 * Parse markdown content to plain text
 * Removes markdown formatting for display purposes
 */
export function parseMarkdownToPlainText(markdown: string): string {
  if (!markdown) return "";

  let text = markdown;

  // Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, "");
  text = text.replace(/`([^`]+)`/g, "$1");

  // Remove headers
  text = text.replace(/^#{1,6}\s+/gm, "");

  // Remove bold and italic
  text = text.replace(/\*\*\*(.+?)\*\*\*/g, "$1");
  text = text.replace(/\*\*(.+?)\*\*/g, "$1");
  text = text.replace(/\*(.+?)\*/g, "$1");
  text = text.replace(/___(.+?)___/g, "$1");
  text = text.replace(/__(.+?)__/g, "$1");
  text = text.replace(/_(.+?)_/g, "$1");

  // Remove links but keep text
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");

  // Remove images
  text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, "");

  // Remove blockquotes
  text = text.replace(/^>\s+/gm, "");

  // Remove horizontal rules
  text = text.replace(/^[-*_]{3,}$/gm, "");

  // Remove list markers
  text = text.replace(/^\s*[-*+]\s+/gm, "");
  text = text.replace(/^\s*\d+\.\s+/gm, "");

  // Remove extra whitespace and newlines
  text = text.replace(/\n{3,}/g, "\n\n");
  text = text.trim();

  return text;
}

/**
 * Get word count from text (handles markdown)
 */
export function getWordCount(text: string): number {
  const plainText = parseMarkdownToPlainText(text);
  if (!plainText) return 0;
  return plainText.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Get content preview from text (handles markdown)
 * @param text - The text to preview
 * @param maxLength - Maximum length of preview (default: 50)
 */
export function getContentPreview(text: string, maxLength: number = 50): string {
  const plainText = parseMarkdownToPlainText(text);
  if (!plainText) return "";
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  return plainText.substring(0, maxLength) + "...";
}

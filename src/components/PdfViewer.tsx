import type { PdfViewerProps } from "../props";

export function PdfViewer({ src }: PdfViewerProps) {
  return (
    <iframe title="PDF previewer" src={src} className="w-full h-full"></iframe>
  );
}

import { Download } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface CvViewerProps {
  dict: Dictionary;
}

export function CvViewer({ dict }: CvViewerProps) {
  const { cv } = dict;

  return (
    <section id="cv" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary">
            {cv.title}
          </h2>
          <a
            href={cv.pdfUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <Download className="h-4 w-4" />
            {cv.download}
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <iframe
            src={cv.pdfUrl}
            title={cv.title}
            className="h-[600px] w-full"
            style={{ border: "none" }}
          />
          {/* Fallback message for browsers that don't support iframe PDF */}
          <noscript>
            <p className="p-6 text-center text-muted-foreground">
              <a href={cv.pdfUrl} className="text-primary underline">
                {cv.download}
              </a>
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}

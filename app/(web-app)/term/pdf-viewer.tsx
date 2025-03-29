"use client";

import { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDFViewer() {
  const [totalPages, setTotalPages] = useState(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState(350);
  const [divHeight, setDivHeight] = useState(350);

  const handleLoadDocument = ({ numPages }: { numPages: any }) => {
    setTotalPages(numPages);

    setDivWidth(
      divRef?.current?.offsetWidth ? divRef?.current?.offsetWidth - 23 : 350
    );

    setDivHeight(
      divRef?.current?.offsetHeight ? divRef?.current?.offsetHeight - 10 : 450
    );
  };

  return (
    <div
      ref={divRef}
      className="flex-auto bg-[#E4E5F0] p-3 rounded-sm overflow-y-auto"
    >
      <Document onLoadSuccess={handleLoadDocument} file={"/docs/term.pdf"}>
        {Array.from(Array(totalPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <div
                key={page}
                className={`page_${page}`}
                style={{ height: divHeight }}
              >
                <Page
                  renderTextLayer={false}
                  key="default"
                  pageNumber={page}
                  height={
                    divRef?.current?.offsetHeight
                      ? divRef?.current?.offsetHeight - 30
                      : 350
                  }
                  width={divWidth}
                ></Page>
              </div>
            );
          })}
      </Document>
    </div>
  );
}

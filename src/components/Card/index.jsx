"use client";
import React, { useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import PageFlipDemo from "./pageflip";
import { PDFViewer } from "@react-pdf/renderer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Teste() {
  const width = 376;
  const height = 500;
  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const Page = React.forwardRef(({ pageNumber }, ref) => {
    const book = useRef();
    return (
      <div ref={ref}>
        <ReactPdfPage
          pageNumber={pageNumber}
          width={width}
          data-density="hard"
          scale={1.8}
        />
      </div>
    );
  });
  const generatePages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(<Page key={i} pageNumber={i} />);
    }
    return pages;
  };
  const book = useRef();
  const onFlip = useCallback((e) => {
    console.log('Current page: ' + e.data);
  })
 
  return (
    <div className="w-full h-full py-10 flex items-center justify-center overflow-y-hidden mt-10  relative">
     <PDFViewer>
        <PageFlipDemo/>
        </PDFViewer>

    </div>
  );
}

export default Teste;

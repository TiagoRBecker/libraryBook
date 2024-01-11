"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Teste() {
  const width = 300;
  const height = 424;
  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const Page = React.forwardRef(({ pageNumber }, ref) => {
    
    return (
      <div ref={ref}>
        <ReactPdfPage pageNumber={pageNumber} width={600} height={200}  />
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
  return (
    <div className=" flex items-center justify-center ">
      <Document file={"/vol1.pdf"} onLoadSuccess={onDocumentLoadSuccess} >
        <HTMLFlipBook width={400} height={300} autoSize={true}>
          {generatePages()}
        </HTMLFlipBook>
      </Document>
    </div>
  );
}

export default Teste;

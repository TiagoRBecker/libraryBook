"use client";
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import PageFlipDemo from "./pageflip";

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
  return (
    <div className="w-full h-full py-10 flex items-center justify-center overflow-y-hidden mt-10  relative">
      <Document file={"/vol1.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
        {/* Embedded PageFlipDemo component */}

        {/* Render PDF pages */}
        <HTMLFlipBook width={width} height={height} size="fixed" ref={book}>
          {generatePages()}
        </HTMLFlipBook>
      </Document>
      <button className="absolute top-1/2 left-11" onClick={() => book.current.pageFlip().flipNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-gray-500  cursor-pointer hover:text-[#14B7A1]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="absolute top-1/2 right-11" onClick={() => book.current.pageFlip().flipPrev()}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-gray-500  cursor-pointer hover:text-[#14B7A1]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Teste;

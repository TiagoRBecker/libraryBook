"use client"
import { Viewer, Worker, PdfJs } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { StyleSheet } from "@react-pdf/renderer";
const ReadPDF = ({pdf}) => {
    const styles = StyleSheet.create({
        body: {
          paddingTop: 35,
          paddingBottom: 65,
          paddingHorizontal: 35,
        },
        title: {
          fontSize: 24,
          textAlign: "center",
          fontFamily: "AntonFamily",
        },
        text: {
          margin: 12,
          fontSize: 14,
          textAlign: "justify",
          fontFamily: "AntonFamily",
        },
        image: {
          marginVertical: 15,
          marginHorizontal: 100,
        },
        header: {
          fontSize: 12,
          marginBottom: 20,
          textAlign: "center",
          color: "grey",
          fontFamily: "AntonFamily",
        },
        pageNumber: {
          position: "absolute",
          fontSize: 12,
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "grey",
          fontFamily: "AntonFamily",
        },
      });
    return ( 
        <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        style={{ width: "70%" }}
      >
        <div className="w-[70%]  ">
          <Viewer fileUrl={pdf} style={{ width: "100%" }} />
        </div>
      </Worker>
     );
}
 
export default ReadPDF;
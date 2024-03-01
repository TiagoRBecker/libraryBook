"use client"

import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { StyleSheet } from "@react-pdf/renderer";
import Script from "next/script";
const ReadPDF = ({pdf}) => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "AntonFamily",
    },
    text: {
      margin: 12,
      fontSize: 10,
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
      bottom: 0,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
  });
    return ( 
   
    <>
      <Script strategy="beforeInteractive" src="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js" />
  <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js`}
        style={{ width: "70%", height: "100%", }}
      >
        <div className="w-[70%] py-5  ">
          <Viewer fileUrl={pdf}  defaultScale={1.2} style={styles} size={50}/>
        </div>
      </Worker>
      </>

    
     
     );
}
 
export default ReadPDF;
/*
const styles = StyleSheet.create({
        body: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingHorizontal: 35,
        },
        title: {
          fontSize: 24,
          textAlign: "center",
          fontFamily: "AntonFamily",
        },
        text: {
          margin: 12,
          fontSize: 10,
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
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "grey",
          fontFamily: "AntonFamily",
        },
      });
  <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        style={{ width: "70%", height: "100%", }}
      >
        <div className="w-[70%]  ">
          <Viewer fileUrl={pdf}  defaultScale={1.2} style={styles} size={50}/>
        </div>
      </Worker>
*/
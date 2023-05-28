import React from "react";
import ReactDOMServer from 'react-dom/server';

// PDF libraries
import { jsPDF } from "jspdf";
import html2pdf from 'html2pdf.js';

// material icons
import DownloadIcon from '@mui/icons-material/Download';

export const MarkdownToPDFButton = ({ markdown, fileName }) => {

  const generatePDF = () => {

    // get static markup from given HTML
    const html = ReactDOMServer.renderToStaticMarkup(markdown);

    // create new PDF
    const pdf = new jsPDF();

    // options for generated PDF
    const opt = {
      margin:       0.5,
      filename:     `${fileName}.pdf`,
      enableLinks:  true,
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // use html2pdf to download to user
    html2pdf().from(html).set(opt).toPdf(pdf).save();

  }

  return (
    <>
    
      <button
        className="w-12 h-12 bg-almost-black-100 rounded-lg font-bold shadow-md uppercase transition-all duration-300 hover:shadow-xl"
        onClick={generatePDF}
      >
        <DownloadIcon />
      </button>
    
    </>
  );
};
import React from "react";
import jsPDF from "jspdf";

const PDFGenerator = ({ portfolioData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text(`Full Name: ${portfolioData.fullName}`, 10, 10);
    doc.text(`Contact: ${portfolioData.contact}`, 10, 20);
    doc.text(`Bio: ${portfolioData.bio}`, 10, 30);

    // Add other sections like skills, work experience, etc.

    doc.save("portfolio.pdf");
  };

  return <button onClick={generatePDF}>Generate PDF</button>;
};

export default PDFGenerator;

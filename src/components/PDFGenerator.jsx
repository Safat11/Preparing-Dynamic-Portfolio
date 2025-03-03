import jsPDF from "jspdf";

const PDFGenerator = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Portfolio - ${data.name}`, 10, 10);
    doc.text(`Contact: ${data.contact}`, 10, 20);
    doc.text(`Bio: ${data.bio}`, 10, 30);
    doc.text(`Skills: ${data.skills}`, 10, 40);
    doc.save("portfolio.pdf");
  };

  return <button className="bg-red-500 text-white p-2" onClick={generatePDF}>Download PDF</button>;
};

export default PDFGenerator;

/*import React from "react";

const PdfReader = () => {
  const pdfPath = "public/assets/pdf/pdf1.pdf"; 

  return (
    <div className="container py-10">
      <iframe
        src={pdfPath}
        className="w-full sm:w-[70%] mx-auto h-[500px]"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PdfReader;*/

import React from "react";

const PdfReader = ({ pdfPath }) => {
  return (
    <div className="container py-10">
      <iframe
        src={pdfPath}
        className="w-full sm:w-[70%] mx-auto h-[500px]"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PdfReader;



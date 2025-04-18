import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLoadUserQuery } from "@/features/api/authApi";

const CertificateDownload = () => {
  const certificateRef = useRef(null);
  const { data: userData } = useLoadUserQuery();

  // Fetching User Details
  const studentName = userData?.user?.name || "Your Name";
  const studentPhoto = userData?.user?.photoUrl || "https://via.placeholder.com/100";
  const courseTitle = userData?.user?.course?.courseTitle|| "................."; // Adjust according to user API
  console.log("User Data:", userData);

  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/Wiki-ELearning-Logo.png"; // Replace with your logo

  const handleDownload = async () => {
    const certificate = certificateRef.current;
    if (!certificate) return;

    try {
      const canvas = await html2canvas(certificate, {
        scale: 2,
        useCORS: true, // Ensures external images load correctly
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("landscape");
      pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
      pdf.save(`${studentName}_Certificate.pdf`);
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      {/* Certificate Design */}
      <div
        ref={certificateRef}
        className="relative w-[900px] h-[600px] bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-700 shadow-xl border-8 border-gray-800 rounded-lg p-10 flex flex-col justify-between"
      >
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <img src={logoUrl} alt="Logo" className="w-20 h-20" crossOrigin="anonymous" />
        </div>

        {/* Certificate Title */}
        <h1 className="text-5xl font-bold text-white text-center">
          Certificate of <span className="italic">Achievement</span>
        </h1>
        <p className="text-lg text-center text-white mt-2">
          This certificate is proudly awarded to
        </p>

        {/* Student Name */}
        <h2 className="text-4xl font-bold text-yellow-300 text-center">
          {studentName}
        </h2>

        {/* User Photo */}
        <div className="flex justify-center mt-4">
          <img
            src={studentPhoto}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-lg"
            crossOrigin="anonymous"
          />
        </div>

        <p className="text-lg mt-4 text-white text-center">
          For successfully completing
        </p>

        {/* Course Title */}
        <h3 className="text-3xl font-semibold text-gray-100 text-center italic">
          {courseTitle}
        </h3>

        <p className="mt-4 text-gray-300 text-center">
          Date: {new Date().toLocaleDateString()}
        </p>

        {/* Signature & Badge */}
        <div className="flex justify-between items-end mt-6 px-10">
          <div className="text-center">
            <div className="w-40 h-16 border-b-2 border-gray-300"></div>
            <p className="mt-2 text-gray-100 font-semibold">Instructor Signature</p>
          </div>

          {/* Excellency Badge */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-md shadow-md">
              Excellence Award
            </div>
          </div>

          <div className="text-center">
            <div className="w-40 h-16 border-b-2 border-gray-300"></div>
            <p className="mt-2 text-gray-100 font-semibold">Director Signature</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-600"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default CertificateDownload;

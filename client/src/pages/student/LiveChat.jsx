import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const openWhatsAppWeb = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };

  return (
    <div 
      className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all duration-300"
      onClick={openWhatsAppWeb}
    >
      <FaWhatsapp className="text-2xl" />
      <span className="font-semibold text-lg">Chat with Us</span>
    </div>
  );
};

export default WhatsAppChat;

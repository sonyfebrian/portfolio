import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Bot: React.FC = () => {
    const phoneNumber = "6281286379597"; // Replace with your WhatsApp phone number

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, "_blank");
    };

    return (
        <div
            onClick={handleClick}
            className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-green-500 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
        >
            <FaWhatsapp className="text-white text-xl" />
        </div>
    );
};

export default Bot;

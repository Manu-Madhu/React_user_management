import React from "react";
import Form from "./Form";

const Modal = ({ isAvailable, onClose }) => {
  if (!isAvailable) return null;
  const handleColse = (e) => {
    if (e.target.id === "wraper") onClose();
  };
  return (
    <div
      id="wraper"
      className="w-full h-full z-[100] fixed insert-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleColse}
    >
      <div className="md:w-[600px] w-[80%] h-[400px] glassCard rounded">
        <div className="w-full h-full">
            <Form/>
        </div>
      </div>
    </div>
  );
};

export default Modal;

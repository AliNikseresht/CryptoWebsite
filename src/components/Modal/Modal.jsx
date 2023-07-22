import React from "react";

const Modal = ({ isVisible, onClose, children, modalTitle }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[550px] flex flex-col">
        <button
          className="text-black text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-6 rounded-2xl">
          <h2 className="my-2 text-center font-bold text-2xl">{modalTitle}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

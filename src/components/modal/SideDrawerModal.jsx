import React from "react";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../../hooks/useOutsideClick";

function SideDrawerModal({ children, open, title, onClose }) {
  const ref = useOutsideClick(onClose);

  return (
    <div
      className={`h-screen w-full fixed inset-0 bg-slate-300 bg-opacity-30 backdrop-blur-sm z-50 transition-all duration-500 ease-in-out ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        ref={ref}
        className={`fixed right-0 bg-secondary-900 p-4 rounded-lg shadow-lg w-[calc(100vw-2rem)] md:max-w-lg h-screen overflow-y-auto transform transition-all duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-b-primary-900 pb-2 mb-6">
          <p className="text-primary-900 font-bold text-base">{title}</p>
          <button onClick={onClose}>
            <HiOutlineX className="w-5 h-5 text-primary-900" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default SideDrawerModal;

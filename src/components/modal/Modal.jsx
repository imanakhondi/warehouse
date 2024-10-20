import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../../hooks/useOutsideClick";

function Modal({ children, open, title, onClose }) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="h-screen w-full fixed inset-0 bg-slate-300 bg-opacity-30 backdrop-blur-sm z-50">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-900 p-4 rounded-lg shadow-lg transition-all duration-300 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
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
    )
  );
}

export default Modal;

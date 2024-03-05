import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`bg-slate-200 rounded-md border-none shadow-md shadow-slate-900 p-4 w-4/5 max-w-2xl ease-out backdrop:bg-black/50 backdrop:backdrop-blur-md ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

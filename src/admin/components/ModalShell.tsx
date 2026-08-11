import React from "react";

interface Props {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function ModalShell({ title, onClose, children, footer, className = "", size = "md" }: Props) {
  const dialogSize = size === "sm" ? "max-w-md" : size === "lg" ? "max-w-4xl" : "max-w-2xl";

  return (
    <div className="fixed inset-0 z-[1050] flex items-center justify-center p-3 sm:p-4" tabIndex={-1}>
      <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]" onClick={onClose}></div>

      <div className={`relative z-[1060] w-full ${dialogSize}`}>
        <div className={`overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] ${className}`}>
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6 sm:py-4">
            <h5 className="text-[1.05rem] font-semibold tracking-tight text-slate-900 m-0">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          <div className="px-5 py-4 sm:px-6 sm:py-5">{children}</div>

          {footer && (
            <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
              <div className="flex flex-wrap justify-end gap-2 sm:gap-3">{footer}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

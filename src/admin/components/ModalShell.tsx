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
  const dialogSize = size === "sm" ? "max-w-md" : size === "lg" ? "max-w-2xl" : "max-w-xl";

  return (
    <div className="fixed inset-0 z-[1050] flex items-center justify-center p-2" tabIndex={-1}>
      <div className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm" onClick={onClose}></div>

      <div className={`relative z-[1060] w-full ${dialogSize}`}>
        <div className={`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg ${className}`}>
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <h5 className="text-base font-semibold text-slate-900 m-0">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          <div className="px-4 py-3">{children}</div>

          {footer && (
            <div className="border-t border-slate-200 bg-white px-4 py-3">
              <div className="flex justify-end gap-2">{footer}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

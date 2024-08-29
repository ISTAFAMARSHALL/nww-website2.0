'use client';

import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0D1F2D] bg-opacity-80 flex items-center justify-center z-50" // Updated to use a color from the palette
      onClick={onClose}
    >
      <div
        className="relative w-11/12 max-w-4xl bg-white p-6 rounded-lg shadow-lg" // Added padding, rounded corners, and shadow for styling
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#0D1F2D] text-3xl" // Updated button text color to match the palette
        >
          &times;
        </button>
      </div>
    </div>
  );
}

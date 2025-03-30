import React from 'react';

function AddCardButton() {
  return (
    <button
        className="border-2 border-dashed border-border-subtle rounded-lg flex flex-col items-center justify-center p-5 text-text-secondary hover:bg-gray-50 transition-colors group min-h-[160px]">
        <svg className="w-8 h-8 mb-2 text-gray-400 group-hover:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" /></svg>
        <span className="text-sm font-medium">Add Card</span>
    </button>
  );
}

export default AddCardButton;
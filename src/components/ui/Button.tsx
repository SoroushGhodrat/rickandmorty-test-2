import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className="my-5 rounded border-2 border-indigo-500 bg-indigo-500 px-5 py-2 text-white hover:border-indigo-600 hover:bg-indigo-600"
      aria-label={ariaLabel || title}
    >
      {title}
    </button>
  );
};

export default Button;

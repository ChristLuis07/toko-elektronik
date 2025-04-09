
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, className, containerClassName, labelClassName, onChange, error, ...props }: InputProps) => {
  return (
    <div className={`flex flex-col gap-1 ${containerClassName}`}>
      {label && <label className={`text-sm font-medium text-gray-700 ${labelClassName}`}>{label}</label>}
      <input
        className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a8a70] focus:border-[#2a8a70] hover:border-gray-400 transition-colors ${className}`}
        onChange={onChange}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

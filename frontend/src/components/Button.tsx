import type React from "react"
import type { ButtonHTMLAttributes, FC } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const Button: FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`cursor-pointer px-4 py-2 bg-[#d4f5eb] text-[#2a8a70] font-medium rounded-md hover:bg-[#c0ede0] transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

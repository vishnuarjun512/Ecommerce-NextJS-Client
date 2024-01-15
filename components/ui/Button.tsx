import { cn } from "@/lib/utls";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, onClick, children, disabled, type = "button", ...props },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        className={cn(
          `
          w-auto 
          rounded-full 
          bg-black 
          border-transparent 
          px-5 
          py-3 
          disabled:cursor-not-allowed
          disabled:opacity-50
          text-white 
          font-semibold 
          hover:opacity-75 
          transition
          `,
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

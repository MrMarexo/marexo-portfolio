import { AnchorHTMLAttributes, FC } from "react";
import { cn } from "../utils";

export const Link: FC<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "fill" | "outline" | "naked";
  }
> = ({ children, className, variant = "naked", ...attr }) => {
  return (
    <a
      {...attr}
      className={cn(
        "hover:bg-my_black-lightest cursor-pointer rounded-md border px-6 py-2 transition-colors duration-300",
        variant === "fill" &&
          "border-my_black bg-my_black text-my_white hover:bg-my_black-light",
        variant === "outline" &&
          "border-my_black hover:bg-my_black hover:text-my_white",
        variant === "naked" && "hover:bg-my_black-lightest border-none",
        className,
      )}
    >
      {children}
    </a>
  );
};

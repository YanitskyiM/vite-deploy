import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("", {
  variants: {
    theme: {
      primary:
        "text-white border uppercase rounded border-sky-500 bg-sky-500",
      outline: "text-sky-500 uppercase border rounded border-sky-500",
      link: "text-sky-500 uppercase underline",
    },
    size: {
      sm: "text-sm py-2.5 px-4",
      md: "text-sm py-3 px-7",
      lg: "text-sm py-3 w-full",
    },
  },
  defaultVariants: {
    theme: "primary",
    size: "md",
  },
});

export const Button: React.FC<ButtonProps> = ({
  className,
  theme,
  size,
  ...props
}) => <button className={button({ theme, size, className })} {...props} />;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

import { cn } from "../utils/css.ts";

import * as React from "react";
import type { ComponentProps } from "react";
import { Link } from "react-router";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  variant: "blue" | "gray";
  link?: string;
  iconSide?: "left" | "right";
}

const AppButton = ({
  text,
  variant,
  icon,
  className,
  link,
  iconSide = "left",
  ...props
}: ButtonProps) => {
  const classNames = cn(
    "flex items-center text-center px-3 py-2 justify-center rounded-lg gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#D1D5DB]  disabled:text-black",
    className,
    variant === "blue" && "bg-accent-blue text-white",
    variant === "gray" && "bg-white text-[#374151] font-bold",
  );

  return (
    <>
      {link ? (
        <Link to={link} className={classNames}>
          {iconSide === "left" && icon}
          <span>{text}</span>
          {iconSide === "right" && icon}
        </Link>
      ) : (
        <button className={classNames} {...props}>
          {iconSide === "left" && icon}
          <span>{text}</span>
          {iconSide === "right" && icon}
        </button>
      )}
    </>
  );
};

export default AppButton;

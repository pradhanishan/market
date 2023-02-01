import { FC, ReactNode } from "react";
import classes from "./button.module.css";

interface IButtonProps {
  onClick?: any;
  children: ReactNode;
  variant?: string;
}

const Button: FC<IButtonProps> = ({ onClick, variant, children }) => {
  return (
    <div
      className={
        variant !== undefined && variant !== null && variant === "secondary"
          ? classes["button-secondary"]
          : classes.button
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;

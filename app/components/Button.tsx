import React from "react";
import styles from "../styles/button.module.css";

interface ButtonProps {
  className?: string;
  children: React.ReactNode; 
}

const Button = (props: ButtonProps) => {
  const { className = "", children } = props;  
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
};

export default Button;
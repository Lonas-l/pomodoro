import React from "react";
import "./Button.scss";

type ButtonType = "submit" | "button" | "reset";
interface ButtonProps {
    onClick?: () => void;
    variant: "primary" | "secondary";
    children: React.ReactNode;
    className: string;
    mode: string;
    type?: ButtonType;
    disabled? : boolean;
    dataTestId? :string
}

const Button: React.FC<ButtonProps> = ({ className, onClick, dataTestId, children,variant, mode, type, disabled }) => {
    return (
        <button data-testid={dataTestId} disabled={disabled} type={type} className={`${className} ${mode} ${variant === 'primary' ? 'primary' : 'secondary'}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

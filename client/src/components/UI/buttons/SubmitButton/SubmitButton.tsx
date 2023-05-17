import React, {
    AriaAttributes,
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    FC,
} from "react";

import "./SubmitButton.scss";

export interface CustomButtonProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        AriaAttributes {
    fullWidth?: boolean;
    width?: number;
    height?: number;
    fontSize?: string;
    isLoading?: boolean;
    variant?: "fulfilled" | "outlined";
}

const SubmitButton: FC<CustomButtonProps> = ({
    variant = "fulfilled",
    fullWidth,
    width = 145,
    fontSize,
    height = 35,
    children,
    isLoading,
    className,
    ...props
}) => {
    const optionalStyles = {
        width: fullWidth ? "100%" : width + "px",
        height: height + "px",
        fontSize: fontSize,
    };

    return (
        <button
            className={
                variant === "fulfilled"
                    ? 'fulfilled-btn' + " " + className
                    : 'outlined-btn' + " " + className
            }
            type="submit"
            {...props}
            style={optionalStyles}
            disabled={isLoading}
        >
            {isLoading ? children + "..." : children}
        </button>
    );
};

export default SubmitButton;

import React, {
    AriaAttributes,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from "react";

import "./Input.scss";

export interface InputProps
    extends DetailedHTMLProps<
            InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        AriaAttributes {
    label?: string;
    helperText?: string | undefined;
    error?: boolean;
    className?: string;
    endItem?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ helperText, error, label, className, endItem, ...props }, ref) => {
        return (
            <div className={"input"}>
                {label && <label htmlFor={label + '-input'} className="input__label">{label}</label>}

                <div className="input__wrapper">
                    <input
                        className={
                            error
                                ? `input__field--invalid`
                                : className
                                ? `input__field ${className}`
                                : `input__field`
                        }
                        id={label + '-input'}
                        {...props}
                        ref={ref}
                    />
                    {endItem && <div className="input__icon">{endItem}</div>}
                </div>

                {helperText && (
                    <div
                        className={
                            error
                                ? `input__helper-text--invalid`
                                : `input__helper-text`
                        }
                        role='alert'
                    >
                        {helperText}
                    </div>
                )}
            </div>
        );
    }
);

export default Input;

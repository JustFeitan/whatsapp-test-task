import React, {FC, HTMLProps, JSX, ReactNode} from 'react';
import './Form.scss';

interface FormProps extends HTMLProps<HTMLFormElement>{
    children: ReactNode | JSX.Element | JSX.Element[];
}

const Form: FC<FormProps> = ({children, className, ...props}) => {
    return (
        <form
        noValidate
        className={className ? `form ${className}` : "form"}
        {...props}
        >
            {children}
        </form>
    );
};

export default Form;

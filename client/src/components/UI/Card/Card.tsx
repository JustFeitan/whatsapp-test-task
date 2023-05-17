import React, {DetailedHTMLProps, FC, HTMLAttributes, HTMLProps, JSX, ReactNode} from 'react';
import './Card.scss';

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode | JSX.Element | JSX.Element[]
}

const Card: FC<CardProps> = ({children, className, ...props}) => {
    return (
        <div
            className={className ? `card ${className}` : 'card'}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;

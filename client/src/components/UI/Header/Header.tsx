import React, {FC, HTMLProps} from 'react';
import './Header.scss';

const Header: FC<HTMLProps<'div'>> = ({className, height, ...props}) => {
    return (
        <div
            className={className? `header-wrapper ${className}`: `header-wrapper`}
            style={{height: height}}
        />
    );
};

export default Header;

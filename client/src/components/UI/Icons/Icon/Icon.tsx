import React, { ComponentProps, FC , JSX} from "react";
import { IconInterface } from "../../../../models/Icon";
import "./Icon.scss";

interface IconProps extends IconInterface {
    icon: JSX.Element;
}

const Icon: FC<IconProps> = ({ icon, size = 20, className, ...props }) => {
    const styles = {
        width: size + "px",
        height: size + "px",
    };
    return (
        <div
            className={className ? `icon-btn ${className}` : `icon-btn`}
            style={styles}
            {...props}
        >
            {icon}
        </div>
    );
};

export default Icon;

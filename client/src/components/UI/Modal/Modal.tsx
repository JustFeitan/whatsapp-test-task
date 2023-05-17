import React, {ComponentProps, FC, ReactNode} from 'react';
import './Modal.scss';

interface ModalProps extends ComponentProps<"div"> {
    visible: boolean;
    setVisible?: (visible: boolean) => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({visible, setVisible, children, ...props}) => {
    return (
        <div
            className={visible ? `modal modal--visible` : 'modal'}
            onClick={(e) => setVisible(false)}
            {...props}
        >
            <div
                className="modal__wrapper"
                onClick={event => event.stopPropagation()}
            >
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

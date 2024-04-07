import { createPortal } from "react-dom"
import {forwardRef, useImperativeHandle, useRef} from 'react';

 const Modal = forwardRef(function Modal({children, buttonLabel}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open(){
            dialog.current.showModal()
        }
    }));

    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>{buttonLabel}</button>
            </form>
        </dialog>, 
        document.getElementById('modal-root')
    );
});

export default Modal;
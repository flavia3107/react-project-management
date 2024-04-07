import { createPortal } from "react-dom"
import {forwardRef, useImperativeHandle, useRef} from 'react';
import Button from "./Button.jsx";

 const Modal = forwardRef(function Modal({children, buttonLabel}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open(){
            dialog.current.showModal()
        }
    }));

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button >{buttonLabel}</Button>
            </form>
        </dialog>, 
        document.getElementById('modal-root')
    );
});

export default Modal;
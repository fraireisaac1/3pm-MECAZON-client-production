import styles from "../styles/Modal.module.css";
import { useEffect } from "react";

export default function Modal({data}) {
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <dialog>
            <h1>asdkjaskdasd</h1>
        </dialog>
    );
}
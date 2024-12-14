import styles from "../styles/Modal.module.css";
import { useState, useEffect, useRef } from "react";

export default function Modal({ data, setModalData }) {
    // const [isModalOpen, setModalStatus] = useState(false);
    const modalRef = useRef(null);

    function closeModal() {
        modalRef.current.close();
    }

    useEffect(() => {
        console.log(data);
        if (!modalRef.current.open) {
            modalRef.current.showModal();
        }
    }, [data]);

    return (
      <dialog ref={modalRef} className={styles.container}>
        <div className={styles.modalContent}>
          <h1>{JSON.stringify(data)}</h1>

          <button onClick={closeModal}>Close</button>
        </div>
      </dialog>
    );
}
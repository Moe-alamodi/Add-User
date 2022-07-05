// import ModalError from "./ModalError";
import React from "react";

import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";
const Modal = (props) => {
  const removeModalHandler = () => {
    props.removeModal();
  };
  return (
    <div className={styles.backdrop} onClick={removeModalHandler}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={removeModalHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;

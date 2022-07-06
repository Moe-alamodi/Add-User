import styles from "./UserInput.module.css";
import React, { useState, useRef } from "react";
import Card from "../Card";
import Button from "../Button";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const sumbithandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      props.displayError({
        title: "Invalid Inputs",
        message: "All fields must be filled",
      });
      return;
    }
    props.onAdd({
      name: enteredName,
      age: enteredAge,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={sumbithandler} className={styles.form}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input htmlFor="name" type="text" ref={nameInputRef}></input>
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input htmlFor="age" type="number" min="1" ref={ageInputRef}></input>
        </div>
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};
export default UserInput;

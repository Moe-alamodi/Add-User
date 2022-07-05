import styles from "./UserInput.module.css";
import React, { useState } from "react";
import Card from "../Card";
import Button from "../Button";

const UserInput = (props) => {
  const [inputInfo, setInputInfo] = useState({ name: "", age: "", id: "" });
  const sumbithandler = (event) => {
    event.preventDefault();
    if (
      inputInfo.name.trim().length === 0 ||
      inputInfo.age.trim().length === 0
    ) {
      props.displayError({
        title: "Invalid Inputs",
        message: "All fields must be filled",
      });
      return;
    }
    props.onAdd(inputInfo);
    setInputInfo({ name: "", age: "" });
  };
  const usernameHandler = (event) => {
    const value = event.target.value;

    setInputInfo((prevData) => {
      return {
        ...prevData,
        name: value,
        id: Math.floor(Math.random() * 100) + `E`,
      };
    });
  };
  const ageHandler = (event) => {
    const value = event.target.value;

    setInputInfo((prevData) => {
      return { ...prevData, age: value };
    });
  };
  return (
    <Card>
      <form onSubmit={sumbithandler} className={styles.form}>
        <div className={styles["form-control"]}>
          {" "}
          <label>Username</label>
          <input
            onChange={usernameHandler}
            htmlFor="name"
            type="text"
            value={inputInfo.name}
          ></input>
        </div>
        <div className={styles["form-control"]}>
          {" "}
          <label>Age (Years)</label>
          <input
            onChange={ageHandler}
            htmlFor="age"
            type="number"
            min="1"
            value={inputInfo.age}
          ></input>
        </div>
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};
export default UserInput;

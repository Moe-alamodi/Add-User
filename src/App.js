import "./App.css";
import React, { useState } from "react";
import UserInput from "./components/UI/UsersList/UserInput";
import Modal from "./components/UI/Modal";
import UsersList from "./components/UI/UsersList/UsersList";

function App() {
  const [modal, setmodal] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const removeModal = () => {
    setmodal(false);
  };
  const displayModal = (error) => {
    setError(error);
    setmodal(true);
  };
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      user.id = Math.floor(Math.random() * 100) + `E`;
      return [user, ...prevUsers];
    });
  };
  return (
    <React.Fragment>
      {modal && (
        <Modal
          title={error.title}
          message={error.message}
          removeModal={removeModal}
        />
      )}
      <UserInput onAdd={addUserHandler} displayError={displayModal} />
      <UsersList users={users} />
    </React.Fragment>
  );
}

export default App;

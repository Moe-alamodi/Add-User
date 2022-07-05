import Card from "../Card";
import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  let content = props.users.map((user) => (
    <UserItem id={user.id}>
      {user.name} ({user.age}) years old
    </UserItem>
  ));

  return (
    <Card>
      {props.users.length !== 0 ? (
        <ul> {content}</ul>
      ) : (
        <p style={{ color: "#000" }}>The list is empty!!. Please add user</p>
      )}
    </Card>
  );
};
export default UsersList;

import styles from "./UserItem.module.css";
const UserItem = (props) => {
  return (
    <li key={props.id} className={styles["user"]}>
      {props.children}
    </li>
  );
};
export default UserItem;

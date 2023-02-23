import "./styles.css";
import UserIcon from "../../assets/images/userIcon.png";
import { User } from "../../types/user";

type Props = {
  user: User;
};
const UserCard = ({ user }: Props) => {
  return (
    <>
      <div className="base-card user-card">
        <div className="usercard-top-container">
          <img src={UserIcon} alt="" />
        </div>
        <div className="card-bottom-container">
          <h6>{user.name}</h6>
          <h6>{user.email}</h6>
          <h6>{user.phone}</h6>
        </div>
      </div>
    </>
  );
};

export default UserCard;

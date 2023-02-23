import axios from "axios";
import { BASE_URL } from "../../util/requests";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../types/user";
import UserIcon from "../../assets/images/userIcon.png";
import "./styles.css";

type UrlParams = {
  userId: string;
};

const UserDetails = () => {
  const { userId } = useParams<UrlParams>();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios.get(BASE_URL + `/users/${userId}`).then((response) => {
      setUser(response.data);
    });
  }, [userId]);

  return (
    <>
      <div className="card-user">
        <h3>Cliente</h3>
        <div className="base-card user-details-container">
          <div className="img-container">
            <img src={UserIcon} alt="" />
          </div>
          <div className="user-info-container">
            <h1>Nome: {user?.name}</h1>
            <h1>Telefone: {user?.phone}</h1>
            <h1>Email: {user?.email}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;

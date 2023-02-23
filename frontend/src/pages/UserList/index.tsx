import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard";
import { AxiosParams, SpringPage } from "../../types/vendor/axios";
import { User } from "../../types/user";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../util/requests";

const UserList = () => {
  const [page, setPage] = useState<SpringPage<User>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: "GET",
      url: `${BASE_URL}/users`,
    };
    axios(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <>
      <div className="container my-4 userlist-container">
        <h3>Cliente Cadastrados</h3>
        <div className="row">
          {page?.content.map((user) => {
            return (
              <div className="col-xl-3" key={user.id}>
                <Link to={`/users/${user.id}`}>
                  <UserCard user={user} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserList;

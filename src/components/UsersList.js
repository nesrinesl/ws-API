import axios from "axios";
import React, { useEffect, useState } from "react";
import UsersCard from "./UsersCard";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginTop:"40px"}}>
      {users.map((user) => (
        <UsersCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;

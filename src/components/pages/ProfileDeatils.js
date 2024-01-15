import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ProfileDeatils = () => {


  const { id } = useParams();
  const navigate = useNavigate();
 const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
     // .then((res) => console.log(res.data[0]))

      .then((res) => setUser(res.data[0]))
      //.catch((err) => console.log(err));
  }, [id]);

  console.log(user);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email} </Card.Text>
          <Card.Text>{user.address?.street} </Card.Text>

        

          <Button onClick={() => navigate(-1)} variant="danger">
            BACK
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileDeatils;

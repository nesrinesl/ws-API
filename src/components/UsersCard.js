import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const UsersCard = ({user}) => {
    const navigate=useNavigate();
  return (
    <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.email} </Card.Text>
      
      
   
     
      <Button onClick={()=>navigate(`/details/${user.id}`)} variant="primary">PROFILE</Button>
    </Card.Body>
  </Card></div>
  )
}

export default UsersCard
import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Container } from "@mui/material";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <h2>Users List</h2>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} divider>
            <ListItemText
              primary={user.fullName}
              secondary={`Email: ${user.email}, Mobile: ${user.mobile}, DOB: ${user.dob}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UsersList;

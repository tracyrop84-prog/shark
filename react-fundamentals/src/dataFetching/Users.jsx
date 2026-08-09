import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  //create a state for users
  const [users, setUsers] = useState([]);
  //Fetching data
  useEffect(() => {
    axios.get("https://randomuser.me/api/")
    .then((response)=>{setUsers(response.data.results)})
    
  }, []);
  return (
    <>
      <h1>Users</h1>
      {users.map((user)=>{
        return(<div key={user.login.uuid}>
         <p>{user.name.first} {user.name.last}</p>
        <p>{user.gender}</p>
         <p>{user.location.street.number} {user.location.street.name}</p>
        </div>)
      })}
    </>
  );
}

export default Users;

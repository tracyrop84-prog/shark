import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  //create a state for users
  const [users, setUsers] = useState([]);
  //create loading state
  const [loading, setLoading] = useState(true);
  //error state
  const [error, setError] = useState("");
  //Fetching data

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/");
        setUsers(response.data.results);
        setLoading(false); //turn off loading after request
      } catch (err) {
        console.log(err);
        setError("failed to load users")
        setLoading(false); //if it fail stops loading
      }
    };

    getUsers();
  }, []);
  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <p>Loading users...</p>
      ) :error ?(<p>{error}</p>): (
        users.map((user) => {
          return (
            <div key={user.login.uuid}>
              <p>
                {user.name.first} {user.name.last}
              </p>
              <p>{user.gender}</p>
              <p>
                {user.location.street.number} {user.location.street.name}
              </p>
            </div>
          );
        })
      )}
    </>
  );
}

export default Users;

import { useEffect ,useState} from "react";


function Users() {
    const [users, setUsers] = useState([]);
        useEffect(() => {
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }, []);

    
    return (
        <h1>Users</h1>
    );
}

export default Users;
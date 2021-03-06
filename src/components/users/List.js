import { Link } from "react-router-dom";
const ListUsers = ({ users }) => {
    return (

        <>
            {users.map(user => (


                <div className="col-md-4" key={user.id}>
                    <div className="card"  >
                        <div className="card-header">
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">uername : {user.name}</li>
                            <li className="list-group-item">Email : {user.email} </li>
                            <li className="list-group-item">Phone : {user.phone}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListUsers;
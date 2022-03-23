const ListMember = ({ user }) => {
    return (
        <>
                <div className="col-md-8" key={user.id}>
                    <div className="card"  >
                        <div className="card-header">
                            <span>{user.name}</span>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">uername : {user.name}</li>
                            <li className="list-group-item">Email : {user.email} </li>
                            <li className="list-group-item">Phone : {user.phone}</li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default ListMember;
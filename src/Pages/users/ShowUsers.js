import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ListMember from "../../components/users/ListMember";


const ShowUser = () => {

    const { id } = useParams()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false)
                setError(null)
            }

            ).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [id])

    return (

        <div className="container mt-5">
            <div className="row g-3" >
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {user && <ListMember user={user} />}
            </div>
        </div>
    )
}


export default ShowUser;
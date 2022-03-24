import { useState } from "react";
import Swal from "sweetalert2";

const DeletePost = ({ postId }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleDelete = () => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        })
            .then((data) => {
                console.log(data);
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: 'Thanks!',
                    text: `Post ${postId} delete successfully`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }
                )
            }).catch(err => {
                setError(err.message)
                Swal.fire({
                    title: 'Error!',
                    text: 'Post does not delete !',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                setLoading(false)
            })

    }

    return (
        <>
            <button onClick={handleDelete} className="btn btn-danger me-4">
                {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                Delete</button>
            {error && <div className="mt-2 fw-bold text-danger">{error}</div>}

        </>
    )
}


export default DeletePost;
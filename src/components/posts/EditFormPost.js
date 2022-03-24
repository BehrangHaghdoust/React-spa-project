import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditFormPost = ({ post }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    }, [post])
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
                id:post.id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setLoading(false)
                setError(null)
                Swal.fire({
                 title: 'Thanks!',
                 text: 'Post created successfully',
                  icon :'success',
                  confirmButtonText:'OK'
                }
                )
            }).catch(err => {
                setError(err.message)
                Swal.fire({
                    title: 'Error!',
                    text: 'Post does not change !',
                     icon :'warning',
                     confirmButtonText:'OK'
                   })
                setLoading(false)
            })

    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" />
                    <small className="form-text text-danger">
                        {title ? '' : 'Title is required'}
                    </small>
                </div>
                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea onChange={(e) => setBody(e.target.value)} value={body} className="form-control" rows="6"></textarea>
                    <small className="form-text text-danger">
                        {body ? '' : 'Body is required'}
                    </small>
                </div>

                <button type="submit" className="btn btn-success" disabled={title === '' || body === ''}>
                    {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                    Edit</button>
                {error && <div className="mt-2 fw-bold text-danger">{error}</div>}

            </form>
        </>
    )
}

export default EditFormPost;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostsArticle from "../../components/posts/PostsArticle";


const ShowPost = () => {

    const { id } = useParams()
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false)
                setError(null)
            }

            ).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [id])

    return (

<>
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {post && <PostsArticle post={post} />}
</>
    )
}


export default ShowPost;
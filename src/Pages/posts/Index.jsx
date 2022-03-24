import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListPosts from "../../components/posts/ListPosts";

const IndexPosts = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false)
                setError(null)
            }

            ).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])
    return (

        <>     <h2>Posts : </h2>
            <div>
                <Link to="/posts/create" className="btn btn-dark">Create Post</Link>

            </div>
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {posts && <ListPosts posts={posts} />}
        </>
    )
}

export default IndexPosts;
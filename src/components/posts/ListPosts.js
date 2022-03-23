import { Link } from "react-router-dom";

const ListPosts = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <div className="col-md-4" key={post.id}>
                    <div className="card"  >
                        <div className="card-header fw-bold">
                            <Link to="/">{post.title}</Link>
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default ListPosts;
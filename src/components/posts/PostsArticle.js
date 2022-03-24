import { Link } from "react-router-dom";

const PostsArticle = ({ post }) => {
    return (
        <>
                <div className="col-md-8" key={post.id}>
                    <div className="card"  >
                        <div className="card-header">
                            <span>{post.title}</span>
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>
                        <div className="card-footer">
                        <Link to={`/posts/edit/${post.id}`} className="btn btn-danger">edit</Link>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default PostsArticle;
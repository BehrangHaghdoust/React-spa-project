import { Link } from "react-router-dom";
import DeletePost from "./DeletePost";

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
                        <DeletePost postId={post.id}/>
                        <Link to={`/posts/edit/${post.id}`} className="btn btn-warning">edit</Link>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default PostsArticle;
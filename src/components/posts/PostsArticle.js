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
                    </div>
                </div>
        </>
    )
}

export default PostsArticle;
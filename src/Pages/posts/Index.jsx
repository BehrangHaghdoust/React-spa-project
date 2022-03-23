import { useEffect,useState } from "react";
import ListPosts from "../../components/posts/ListPosts";

const IndexPosts = ()=> {
const [posts ,setPosts] =useState(null);
const [loading ,setLoading] =useState(true);
const [error ,setError] =useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data =>
   {
    setPosts(data);
    setLoading(false)
    setError(null)
   }

    ).catch(err => {
        setError(err.message)
        setLoading(false)
    })
    },[])
    return (
        <div className="container mt-5">
            <div className="row g-3" >
                <h2>Posts : </h2>
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {posts && <ListPosts posts={posts}/> }
            </div>
        </div>
    )
}

export default IndexPosts;
import { Routes, Route } from "react-router-dom";
import IndexPosts from './Index'
import ShowPost from "./ShowPost"
import CreatePost from "./CreatePost"
import EditPost from "./EditPost";
const RouterPosts = () => {
    return (
        <div className="container mt-5">
            <div className="row g-3">
                <Routes>
                    <Route path="/" element={<IndexPosts />} />
                    <Route path="/:id" element={<ShowPost />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/edit/:id" element={<EditPost />} />
                </Routes>
            </div>
        </div>
    )
}

export default RouterPosts
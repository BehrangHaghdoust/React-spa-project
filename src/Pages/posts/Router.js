import { Routes, Route } from "react-router-dom";
import IndexPosts from './Index'
import ShowPost from "./ShowPost"
const RouterPosts = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPosts />} />
            <Route path="/:id" element={<ShowPost />} />
        </Routes>
    )
}

export default RouterPosts
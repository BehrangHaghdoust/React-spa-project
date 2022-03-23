import { Routes, Route } from "react-router-dom";
import IndexPosts from "../posts/Index"
const RouterPosts = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPosts />} />
        </Routes>
    )
}

export default RouterPosts
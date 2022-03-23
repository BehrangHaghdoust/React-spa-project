import { Routes, Route } from "react-router-dom";
import IndexUsers from "./Index"
import ShowUser from "./ShowUsers"
const RouterUser = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexUsers />} />
            <Route path="/:id" element={<ShowUser />} />
        </Routes>
    )
}

export default RouterUser
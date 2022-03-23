import { Routes, Route } from "react-router-dom";
import IndexUsers from "../../Pages/users/Index"
import ShowUser from "../../Pages/users/ShowUsers"
const RouterUser = () => {
    return (
        <Routes>
            <Route path="/users" element={<IndexUsers />} />
            <Route path="/users/:id" element={<ShowUser />} />
        </Routes>
    )
}

export default RouterUser
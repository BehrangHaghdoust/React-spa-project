import {NavLink} from 'react-router-dom';
const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, perferendis a adipisci   vel ducimus commodi minus, voluptates quas n
                    <br/>
                  emo odio labore ipsum, ipsam error explicabo aperiam provident earum? Suscipit, voluptate.</p>
                  <NavLink className="btn btn-success mx-2" to="/users">Users</NavLink>
                  <NavLink className="btn btn-primary " to="/posts">Posts</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home;
import { useState } from "react";

const CreatePost = () => {


const[title,setTitle]=useState('');
const[body,setBody]=useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(title,body);
    }


    return (

        <>
            <div className="col-md-6">
                <h2>Create Post :</h2>
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <div className="mb-3">
                        <label  className="form-label">Title</label>
                        <input onChange={(e)=> setTitle(e.target.value)} type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Body</label>
                        <textarea onChange={(e)=> setBody(e.target.value)}  className="form-control" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-success">Create</button>
                </form>
            </div>

        </>
    )
}


export default CreatePost;
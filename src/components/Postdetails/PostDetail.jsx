import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetail = () => {
    const post=useLoaderData();
    const {id,title,body}=post;

    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post id is : {id}</h3>
           <h2>Title: {title}</h2>
           <p>Body : {body}</p>
           <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;
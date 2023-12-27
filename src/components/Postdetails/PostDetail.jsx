import { useLoaderData } from "react-router-dom";


const PostDetail = () => {
    const post=useLoaderData();
    const {id,title,body}=post
    return (
        <div>
            <h3>Post id is : {id}</h3>
           <h2>Title: {title}</h2>
           <p>Body : {body}</p>
        </div>
    );
};

export default PostDetail;
import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
    const comments=useLoaderData()
    return (
        <div>
            <p>Comments :{comments.length} </p>
            <div>
                {
                    comments.map(comment=><Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;
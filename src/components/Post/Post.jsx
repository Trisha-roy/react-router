import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title,body}=post;
    const postStyle={
        border:'2px solid yellow',
        padding:'12px',
        borderRadius:'20px',
        margin:'20px'
    }
    const navigate=useNavigate()

    const handleShowDetail=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <h3>Title : {title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;
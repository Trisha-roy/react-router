

const Comment = ({comment}) => {
    const {name,email}=comment
    const commentStyle={
        border:'2px solid yellow',
        padding:'12px',
        borderRadius:'20px',
        margin:'20px'
    }
    return (
        <div style={commentStyle}>
            <h4>Comment : {name}</h4>
            <p>Email : {email}</p>
        </div>
    );
};

export default Comment;
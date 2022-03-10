import React, {useState} from 'react';
import EditComment from './EditComment';
import { Link } from 'react-router-dom';

export default function CommentBubble({ id, comment, handleDeleteComment, handleUpdateComment, handleShowComment }) {

  const [isEditing, setIsEditing] = useState(false);
  const { description, user } = comment
  


  function handleDelete(){
    fetch(`/comments/${id}`, { 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    handleDeleteComment(id)
  }

  return (
     <div className="bubble">
       {isEditing ? (
        <EditComment
          id={id}
          comment={comment}
          setIsEditing={setIsEditing}
          handleUpdateComment={handleUpdateComment}
        />
       ) : (
         <div className="comment-container">
           {/* <Link className="full-comment-button" to={`/comments/${id}`}>Full Comment</Link>  */}
           <button className="delete-button" onClick={handleDelete}>X</button>
           <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
            </button>
            <br/>
           <h3 className="comment">{description} 
           <p className="username">- {user.username}</p>
           <Link className="full-comment-button" to={`/comments/${id}`}>Full Comment</Link></h3>
           </div>
       )
      }
      </div>
  )
}

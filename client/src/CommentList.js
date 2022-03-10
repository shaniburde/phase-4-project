import React, { useState, useEffect } from 'react';
import CommentBubble from './CommentBubble';


export default function CommentList({ user }) {

    const [commentData, setCommentData] = useState([])
    const [description, setDescription] = useState("")
    const [dataIndex, setDataIndex] = useState(0)
 
    
    
    useEffect(() => {
        fetch("/comments")
        .then((r) => r.json())
        .then((comments) => { setCommentData(comments) });
    }, []);

    function addNewComment(newComment){
        setCommentData((prevState) => [...prevState, newComment])
      }

      function handleDeleteComment(commentToDelete){
        const updatedComments = commentData.filter((comment) => {
          if (comment.id !== commentToDelete.id) {
            return comment
          } else {
            return null
          }
        });
        setCommentData(updatedComments);
      }

      function handleUpdateComment(updatedCommentObj) {
        const editedComments = commentData.map((comment) => {
          if (comment.id === updatedCommentObj.id) {
            return updatedCommentObj;
          } else {
            return comment;
          }
        });
        setCommentData(editedComments);
      }

    function handleSubmit(e){
        e.preventDefault();
        const newCommentObj = {
            description: description,
            user_id: user.id,
            yoga_pose_id: 1
        }
              fetch("/comments",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCommentObj)
              })
              .then(response => response.json())
              .then((data) => addNewComment(data))  
              setDescription("");     
              console.log(newCommentObj); 
      }

      console.log(commentData)
    
      const commentList = [...commentData]
      // .slice(dataIndex, dataIndex + 6)
      .map((comment) => 
            <CommentBubble 
              key={comment.id} 
              id={comment.id}
              comment={comment} 
              handleDeleteComment={handleDeleteComment} 
              handleUpdateComment={handleUpdateComment}
            />
        ) 

    function handleCommentChange(e){   
    setDescription(e.target.value)
    }

    function handleClickMore() {
        setDataIndex((dataIndex) => (dataIndex + 6) % commentData.length);
      }

  return (
    <>
    <div>{commentList}</div>
    <button className="next-button" onClick={handleClickMore}>➤</button>
    <form className="create-comment" onSubmit={handleSubmit} >
      <label className="form-label" htmlFor="attendees">New Comment: </label>
      <input 
        name="comment"
        type="text"
        placeholder="Enter a comment..."
        value={description}
        onChange={handleCommentChange}
        className="comment-input"
        ></input>
        <input className="submit-button" type="submit" value="Post" />
    </form>

    </>
  )
}

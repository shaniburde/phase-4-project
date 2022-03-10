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

    function handleDelete(id){
        fetch(`/comments/${id}`, { 
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deletedComment) => handleDeleteComment(deletedComment))
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
        console.log(updatedComments)
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
    
        const commentList = commentData
        .slice(dataIndex, dataIndex + 6)
        .map((commentData) => {
            <CommentBubble />
            // return <div key={id}>
            //     <div onClick={console.log(id)}className="comment-container">
            //         <h3 className="comment">{description}</h3>
            //         <p className="username">{user.username}</p>
            //         <button className="delete-button" onClick={handleDelete(id)}>X</button>
            //     </div>
            // </div>
        }) 

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
    <form className="edit-event" onSubmit={handleSubmit} >
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

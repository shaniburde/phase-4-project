import React, { useState, useEffect } from 'react';
import CommentBubble from './CommentBubble';



export default function CommentList({ user }) {

    const [commentData, setCommentData] = useState([])
    const [description, setDescription] = useState("")
    const [dataIndex, setDataIndex] = useState(0)
    const [showComment, setShowComment] = useState("")
 
    
    
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

      function handleShowComment(singleComment){
        setShowComment(singleComment)
      }
    
      const commentList = [...commentData]
      .slice(dataIndex, dataIndex + 3)
      .map((comment) => 
            <CommentBubble 
              key={comment.id} 
              id={comment.id}
              comment={comment} 
              handleDeleteComment={handleDeleteComment} 
              handleUpdateComment={handleUpdateComment}
              handleShowComment={handleShowComment}
            />
        ) 

    function handleCommentChange(e){   
    setDescription(e.target.value)
    }

    function handleClickMore() {
        setDataIndex((dataIndex) => (dataIndex + 3) % commentData.length);
      }

    function handleClickLess() {
      setDataIndex((dataIndex) => (dataIndex - 3) % commentData.length);
    }

  return (
    <>
    <div className="comments-div">{commentList}</div>
    <div className="float-container">
          <div className="next-container">
                <button 
                className="back-button" 
                onClick={handleClickLess}><i class="gg-chevron-left"></i></button>
          </div>
          <div className="next-container">
              <button 
                className="next-button" 
                onClick={handleClickMore}><i class="gg-chevron-right"></i></button>
            </div>
        </div>
    <form className="create-comment" onSubmit={handleSubmit} >
      <label className="comment-label" htmlFor="comment">New Comment: </label>
      <input 
        className="comment-input"
        name="comment"
        type="text"
        placeholder="Enter a comment..."
        value={description}
        onChange={handleCommentChange}
        ></input>
        <input className="submit-button" type="submit" value="Post" />
    </form>

    </>
  )
}

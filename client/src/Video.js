import React, {useState, useEffect} from "react";
import "./styles";
import { Link } from 'react-router-dom';
import YoutubeEmbed from "./YoutubeEmbed";
import CommentList from "./CommentList";

export default function Video({ videoData, findId, commentData }) {

  // const [commentData, setCommentData] = useState([]);
  const {title, category, description, comments } = commentData
  // const [allComments, setAllComments] = useState([])
 console.log(title)
  
  // const commentDataList = [...comments].map((comment) => {
  //   return <p key={comment.id}>{comment.description}</p>;
  // });

  // const [comments, setComments] = useState([])

    
    
  //   useEffect(() => {
  //   fetch("/comments")
  //     .then((r) => r.json())
  //     .then((data) => setComments(data));

  // }, []);

  // function userComments(){
  //     const filter = comments.filter((comment) => {
  //         return comment.user_id === user["id"]
  //     })
  //     return filter;
  // }

  // console.log(userComments())

  // const allComments = userComments().map((comment) => {
  //     return comment.comment
  // })

  // useEffect(() => {
  //   fetch("http://localhost:4000/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // const delay = ms => new Promise(res => setTimeout(res, ms))

  // const handleEditUser = async (userEdit) => {
  //   await delay(500);
  //   setUser(userEdit)
  // }

  
  // useEffect(() => {
  //   fetch(`http://localhost:4000/yoga_poses/${findId}`)
  //   .then(r => r.json())
  //   .then((comments) => setCommentData(comments));
  // }, []);

 

  return (
    <div className="video-container">
      <Link exact to="*" className="back-button">Back</Link>
      <h2 className="video-title" >{title}</h2>
      <YoutubeEmbed videoData={videoData} />
      <h5 className="video-category">{category}</h5>
      <p className="video-description">{description}</p>
      <CommentList  commentData={commentData}/>
      {/* {commentDataList} */}
    </div>
  );
}

// NOTE: add description of yoga pose here!
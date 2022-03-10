import React, {useState, useEffect} from "react";
import "./styles";
import { Link } from 'react-router-dom';
import YoutubeEmbed from "./YoutubeEmbed";
import CommentList from "./CommentList";

export default function Video({ videoData, findId }) {

  const [commentData, setCommentData] = useState([]);
  const {title, category, description, comments } = commentData

  
  const commentDataList = [...comments].map((comment) => {
    return <p key={comment.id}>{comment.description}</p>;
});

  console.log(comments[0])
  // const { comments }

  useEffect(() => {
    fetch(`http://localhost:4000/yoga_poses/${findId}`)
      .then((r) => r.json())
      .then((comments) => {setCommentData(comments)});
  }, []);

  console.log(commentData[0])

  return (
    <div className="video-container">
      <Link exact to="*" className="back-button">Back</Link>
      <h2 className="video-title" >{title}</h2>
      <YoutubeEmbed videoData={videoData} />
      <h5 className="video-category">{category}</h5>
      <p className="video-description">{description}</p>
      <CommentList  commentDataList={commentDataList}/>
      {/* {commentDataList} */}
    </div>
  );
}

// NOTE: add description of yoga pose here!
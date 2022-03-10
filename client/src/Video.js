import React from "react";
import "./styles";
import { Link } from 'react-router-dom';
import YoutubeEmbed from "./YoutubeEmbed";

export default function Video({ videoData }) {

  const {title, category, description, video } = videoData

  return (
    <div className="video-container">
      <Link exact to="*" className="back-button">Back</Link>
      <h2 className="video-title" >{title}</h2>
      <YoutubeEmbed videoData={video} />
      <h5 className="video-category">{category}</h5>
      <p className="video-description">{description}</p>
    </div>
  );
}

// NOTE: add description of yoga pose here!
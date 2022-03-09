// import React from 'react';
// import YoutubeEmbed from "./YoutubeEmbed";

// export default function Video({ yogaData }) {

//     const youtubeVideo = yogaData.map((v) =>
//         <YoutubeEmbed 
//         key={v.id}
//         video={v.video} />
//     )

//     console.log(youtubeVideo)
//   return (
    
//     <div>
//       {youtubeVideo}
//     </div>
//   )
// }
import React from "react";
import "./styles";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Video({ yogaData }) {
  return (
    <div className="App">
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
  );
}

// NOTE: add description of yoga pose here!
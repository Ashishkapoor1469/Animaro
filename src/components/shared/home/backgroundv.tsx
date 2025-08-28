// components/BackgroundVideo.tsx
"use client";
import React from "react";
const BackgroundVideo = () => {
  return (
    <div className="h-full w-full">
      <video className="h-full w-full object-cover" src="/video/6.mp4" autoPlay loop muted>
     </video>
    </div>
  );
};

export default BackgroundVideo;

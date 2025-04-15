import React from "react";

const StoryPictures = () => {
  return (
    <div
      className="story__pictures"
      style={{
        backgroundImage: `linear-gradient(rgba(198, 153, 99, .5), rgba(198, 153, 99, .5)), url(./img/back.jpg)`,
      }}
    >
      <img
        src="img/story-1.jpeg"
        alt="Couple with new house"
        className="story__img--1"
      />
      <img src="img/story-2.jpeg" alt="New house" className="story__img--2" />
    </div>
  );
};

export default StoryPictures;

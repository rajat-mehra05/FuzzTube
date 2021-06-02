import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videoActions";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "Tanay Pratap",
  "dietburrp",
  "Valorant",
  "Redux",
  "Brad Traversy",
  "Flying Beast",
  "Average Jonas",
  "Flights",
  "Pubg",
  "Music",
  "Gatsby",
  "React js",
  "Angular js",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          className={activeElement === value ? "active" : ""}
          onClick={() => handleClick(value)}
          key={i}
        >
          {" "}
          {value}{" "}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;

/* give index key iff list isn't getting modified */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/commentsActions";
import Comment from "../single-comment/Comment";
import "./_comments.scss";

const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const comments = useSelector((state) => state.commentList.comments);

  //grabbing top comments now
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  //getting user pic from store
  const { photo } = useSelector((state) => state.auth?.user);

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const handleComment = (e) => {
    //we need text as a controlled input to add a comment
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));
    setText("");
  };

  return (
    <div className="comments">
      <p> {totalComments} comments </p>
      <div className="comments_form d-flex w-100 my-2">
        <img src={photo} alt="avatar" className="rounded-circle mr-3" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2 mb-2">Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {_comments?.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;

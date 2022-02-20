import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async (postId) => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments(postId);
  }, [postId]);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ol>{renderedComments}</ol>;
};

export default CommentsList;

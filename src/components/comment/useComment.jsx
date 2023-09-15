import React, { createContext, useContext, useState, useMemo } from "react";
import nextId from "react-id-generator";

const CommentContext = createContext();

const CommentContextProvider = ({ children, data }) => {
  const [comment, setComment] = useState(data.comment);
  const [isReplying, setReplying] = useState(false);
  const [isEditting, setEditting] = useState(false);
  const id = nextId();
  const onEdit = () => {
    setEditting(!isEditting);
  };

  const onReply = () => {
    setReplying(!isReplying);

  };

  const onDelete = () => {
    setComment(null);
  };

  const onUpdate = (content) => {
    setComment({
      ...comment,
      content,
    });

    onEdit();
  };
  const onNewReply = (content) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          content,
          createdAt: new Date().toLocaleDateString(),
          id: id,
          user: data.currentUser,
          score: 0,
          replies: [],
          replyingTo: comment.user.username,
        },
      ],
    });

    onReply();
  };
  const handleIncreament = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };

  const handleDecrement = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const contextData = useMemo(
    () => ({
      handleIncreament,
      handleDecrement,
      comment,
      onNewReply,
      currentUser: data.currentUser,
      isEditting,
      isReplying,
      onReply,
      onEdit,
      onDelete,
      onUpdate,
    }),
    [isReplying, isEditting, comment]
  );
  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
};

function useComment() {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("There is no comment context provider.");
  }

  return context;
}

export { useComment, CommentContextProvider };

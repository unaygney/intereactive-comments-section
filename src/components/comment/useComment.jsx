import React, { createContext, useContext, useState, useMemo } from "react";

const CommentContext = createContext();

const CommentContextProvider = ({ children, data }) => {
  const [comment , setComment] = useState(data.comment)
  const [isReplying, setReplying] = useState(false);
  const [isEditting , setEditting] = useState(false);

  const onEdit = () => {
    setEditting(!isEditting)
  }

  const onReply = () => {
    setReplying(!isReplying);
  };

  const onDelete = () => {
    setComment(null)
  }

  const contextData = useMemo(
    () => ({
      comment,
      currentUser:data.currentUser,
      isEditting,
      isReplying,
      onReply,
      onEdit,
      onDelete,
    }),
    [isReplying ,isEditting , comment]
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

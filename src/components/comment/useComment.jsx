import React, { createContext, useContext, useState, useMemo } from "react";

const CommentContext = createContext();

const CommentContextProvider = ({ children, data }) => {
  const [isReplying, setReplying] = useState(false);

  const onReply = () => {
    setReplying(!isReplying);
  };

  const contextData = useMemo(
    () => ({
      ...data,
      isReplying,
      onReply,
    }),
    [isReplying]
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

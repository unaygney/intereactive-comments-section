import React from "react";
import Comment from "../comment";
import NewCommentEditor from "../new-comment-editor";
import Data from "../../../data.json";
import { CommentContextProvider } from "../comment/useComment";

function Conversation() {
  return (
    <div>
      {Data.comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}

      <NewCommentEditor />
    </div>
  );
}

export default Conversation;

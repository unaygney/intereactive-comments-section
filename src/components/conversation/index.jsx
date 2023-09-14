import React from "react";
import Comment from "../comment";
import NewCommentEditor from "../new-comment-editor";
import Data from "../../../data.json";
import { CommentContextProvider } from "../comment/useComment";

function Conversation() {
  return (
    <div className="flex flex-col gap-6 py-16 items-center">
      {Data.comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}

      <NewCommentEditor image={Data.currentUser.image.png} alt={Data.currentUser.username} />
    </div>
  );
}

export default Conversation;

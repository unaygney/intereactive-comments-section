import React, { useState } from "react";
import Comment from "../comment";
import NewCommentEditor from "../new-comment-editor";
import Data from "../../../data.json";
import { CommentContextProvider } from "../comment/useComment";
import nextId from "react-id-generator";

function Conversation() {

  const [comments, setComments] = useState(Data.comments);
  const id = nextId();
  const handleNewComment = (newComment) => {

    setComments([
      ...comments,
      {
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        id: id,
        user: Data.currentUser,
        score: 0,
      },
    ]);
  };



  return (
    <div className="container mx-auto flex flex-col gap-6 py-16 items-center">
      {comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}
      <NewCommentEditor
        image={Data.currentUser.image.png}
        alt={Data.currentUser.username}
        onClick={handleNewComment}
      />
    </div>
  );
}

export default Conversation;

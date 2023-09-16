import React, {useState} from "react";
import Reactions from "./reactions";
import Header from "./header";
import Body from "./body";
import { useComment, CommentContextProvider } from "./useComment";
import NewCommentEditor from "../new-comment-editor";
import Data from '../../../data.json'


function Comment() {
  const { onNewReply, isReplying, currentUser, comment } = useComment();

  if (!comment) {
    return null;
  }



  const [comments, setComments] = useState(Data.comments);

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
    <>
      <div className="flex  items-start  gap-4 bg-white p-6  rounded-lg max-w-3xl">
        <Reactions />

        <div className="flex flex-col gap-4 w-full">
          <Header />
          <Body />
        </div>
      </div>

      {comment.replies?.length > 0 && (
        <div className="flex flex-col max-w-2xl gap-4 ml-[72px] relative before:absolute before:content-[''] before:w-1 before:h-full before:bg-[#E9EBF0] before:top-0 before:bottom-0 before:-left-9 before:rounded-sm ">
          {comment?.replies?.map((reply) => (
            <CommentContextProvider
              key={reply.id}
              data={{ comment: reply, currentUser }}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
      {isReplying && (
        <NewCommentEditor
          onClick={onNewReply}
          isReply
          image={currentUser.image.png}
          alt={currentUser.username}
        />
      )}
    </>
  );
}

export default Comment;

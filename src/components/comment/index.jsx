import React from "react";
import Reactions from "./reactions";
import Header from "./header";
import Body from "./body";
import { useComment ,CommentContextProvider } from "./useComment";

function Comment() {
  const {
    currentUser,
    comment: { replies },
  } = useComment();

  return (
    <>
      <div className="flex items-start  gap-4 bg-white p-6  rounded-lg max-w-3xl">
        <Reactions />

        <div className="flex flex-col gap-4 w-full">
          <Header />
          <Body />
        </div>
      </div>

      {replies?.length > 0 && (
        <div className="flex flex-col max-w-2xl gap-4 ml-[72px] relative before:absolute before:content-[''] before:w-1 before:h-full before:bg-[#E9EBF0] before:top-0 before:bottom-0 before:-left-9 before:rounded-sm ">
          {replies.map((reply) => (
            <CommentContextProvider
              key={reply.id}
              data={{ comment:reply, currentUser }}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
    </>
  );
}

export default Comment;

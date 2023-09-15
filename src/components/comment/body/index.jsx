import React from "react";
import { useComment } from "../useComment";
import Textarea from "../../textarea";
import { Button } from "../Button";

function Body() {
  const {
    isEditting,
    comment: {  content, replyingTo },
  } = useComment();
console.log(isEditting)
  return (
    <div>
      {isEditting ? (
        <div className="flex flex-col gap-4">
          <Textarea />
          <Button className="ml-auto">
            <p className="uppercase py-3 px-7 rounded-lg  bg-[#5357B6] text-white font-medium">Update</p>
          </Button>
        </div>
      ) : (
        <p className="text-base text-[#67727E]">
          {replyingTo && (
            <span className="text-[#5357B6] font-bold">
              @{replyingTo}&nbsp;
            </span>
          )}
          {content}
        </p>
      )}
    </div>
  );
}

export default Body;

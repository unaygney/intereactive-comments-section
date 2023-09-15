import React from "react";
import Textarea from "../textarea";
import { useComment } from "../comment/useComment";
import { Button } from "../comment/Button";

function NewCommentEditor({ image, alt , isReply = false }) {

  return (
    <div className="flex items-start gap-4 max-w-3xl rounded-lg w-full bg-white p-6">
      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt={alt} />
      </div>
      <Textarea />
      <Button>
        <p className="uppercase py-3 px-7 rounded-lg  bg-[#5357B6] text-white font-medium">
         {isReply ? "Reply" : "Send"}
        </p>
      </Button>
    </div>
  );
}

export default NewCommentEditor;

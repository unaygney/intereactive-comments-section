import React from "react";
import { useComment } from "../useComment";
function Body() {
  const {
    comment: { content ,replyingTo },
  } = useComment();


  return (
    <p className="text-base text-[#67727E]">
      {
        replyingTo && <span className="text-[#5357B6] font-bold">@{replyingTo}&nbsp;</span>
      
      }
        {content}
    </p>

  )
  
  
}

export default Body;

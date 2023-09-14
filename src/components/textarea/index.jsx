import React from "react";

function Textarea({ ...props }) {
  return <textarea rows={4}  {...props} className="border-[1px] border-solid border-[#E9EBF0] w-full resize-none rounded-lg px-6 py-3" placeholder="Add a comment..."/>
}

export default Textarea;

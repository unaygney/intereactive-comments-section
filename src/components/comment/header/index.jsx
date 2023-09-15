import React from "react";
import { useComment } from "../useComment";
import { Button } from "../Button";
import Reply from "../../../assets/icon-reply.svg";
import Delete from "../../../assets/icon-delete.svg";
import Edit from "../../../assets/icon-edit.svg";

function Header() {
  const {
    onDelete,
    onReply,
    onEdit,
    currentUser,
    comment: {
      createdAt,
      user: { image, username },
    },
  } = useComment();

  const ownedByCurrentuser = currentUser.username === username;

  return (
    <div className="flex gap-4 items-center ">
      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
        <img src={image.png} alt="profile photo" />
      </div>
      <h4 className="font-medium text-[#334253] text-base">{username}</h4>
      {ownedByCurrentuser && (
        <span className="text-sm text-white bg-[#5357B6] py-[1] px-1 font-medium rounded-sm">
          you
        </span>
      )}
      <div className="text-base text-[#67727E] ">{createdAt}</div>

      <div className="ml-auto">
        {ownedByCurrentuser ? (
          <>
            <Button onClick={onDelete}>
              <img src={Delete} alt="Delete button" />
              <p className="font-bold text-[#ED6368] text-base">Delete</p>
            </Button>

            <Button onClick={onEdit}>
              <img src={Edit} alt="edit button" />
              <p className="font-bold text-[#5357B6] text-base">Edit</p>
            </Button>
          </>
        ) : (
          <Button onClick={onReply}>
            <img src={Reply} alt="reply button" />
            <p className="font-bold text-[#5357B6] text-base">Reply</p>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;

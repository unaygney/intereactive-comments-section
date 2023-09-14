import React, { useContext } from "react";
import { Button } from "../Button";
import Plus from "../../../assets/icon-plus.svg";
import Minus from "../../../assets/icon-minus.svg";
import {useComment} from "../useComment"
function Reactions() {
  const {
    comment: { score },
  } = useComment();

  return (
    <div className="bg-[#F5F6FA] flex flex-col items-center rounded-lg ">
      <Button>
        <img src={Plus} alt="" />
      </Button>
      <p className="my-2">{score}</p>

      <Button>
        <img src={Minus} alt="" />
      </Button>
    </div>
  );
}

export default Reactions;

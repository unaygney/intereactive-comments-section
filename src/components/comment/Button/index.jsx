import React from "react";

function Button({ children, props }) {
  return <button className=" p-3 inline-flex items-center gap-2" {...props}>{children}</button>;
}

export { Button };

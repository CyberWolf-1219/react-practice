import React, { ReactElement } from "react";
import { BsStarFill } from "react-icons/bs";

function DetailTag({ children }: { children: ReactElement[] | ReactElement }) {
  return (
    <div className="w-max h-fit px-2 py-1 flex items-center gap-1 rounded-full bg-slate-200 text-slate-500 font-semibold">
      {children}
    </div>
  );
}

export default DetailTag;

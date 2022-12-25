import React from "react";

function Tag({ children }: { children: string }) {
  return (
    <span className="shrink-0 w-fit h-fit px-3 py-2 border-2 border-white bg-secondary/10 font-normal rounded-full cursor-default transition-all hover:bg-secondary hover:text-primary">
      {children}
    </span>
  );
}

export default Tag;

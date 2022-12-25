import React from "react";

function TimelineCard({ _class }: { _class: string }) {
  return (
    <div
      className={`timeline_card relative w-[80%] aspect-[1/0.45] px-2 py-2 rounded-2xl bg-transparent ${_class}`}
    >
      <div className="w-full h-full p-2 rounded-2xl bg-primary group">
        <div className="w-full h-full border-2 border-secondary/30 p-3 rounded-2xl backdrop-blur-md bg-white/10 transition-all group-hover:scale-125">
          <h3 className="w-full m-0 mb-2 font-normal text-xl text-center">
            MONTH
          </h3>
          <div>
            <b className="font-bold text-xl mb-4">TITLE</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              impedit similique perferendis! Placeat, tempora praesentium?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineCard;

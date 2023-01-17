import React from "react";
import { AgentCard } from "./../";

function Section_05() {
  return (
    <section className="max-w-screen-xl w-full h-fit mx-auto flex flex-col gap-12 py-4 px-12">
      <div className="w-fill h-fit">
        <h2 className="font-bold text-3xl text-gray-500">Meet Our Agents</h2>
        <small className="font-light text-sm text-gray-500">
          Project Selection is a process to assess each project idea and select
          the project with the highest priority
        </small>
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between gap-12">
        <AgentCard />
        <AgentCard />
        <AgentCard />
      </div>
    </section>
  );
}

export default Section_05;

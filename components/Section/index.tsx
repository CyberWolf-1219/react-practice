import React from "react";

function Section({
  classList,
  children,
}: {
  classList: string;
  children: React.ReactElement[] | React.ReactElement;
}) {
  return (
    <section
      className={`w-[75%] h-fit p-16 mx-auto flex gap-4 items-center justify-start ${classList}`}
    >
      {children}
    </section>
  );
}

export default Section;

import React from "react";
import FAQItem from "../FAQItems/FAQItem";

function FAQ() {
  return (
    <div className={ `w-full h-full my-8 overflow-visible` }>
      <div
        className={ `w-full h-fit flex flex-col items-center justify-start gap-4` }>
        <FAQItem
          q={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit.` }
          a={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, suscipit!` }
        />
        <FAQItem
          q={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit.` }
          a={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, suscipit!` }
        />
        <FAQItem
          q={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit.` }
          a={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, suscipit!` }
        />
        <FAQItem
          q={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit.` }
          a={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, suscipit!` }
        />
        <FAQItem
          q={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit.` }
          a={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, suscipit!` }
        />
      </div>
    </div>
  );
}

export default FAQ;

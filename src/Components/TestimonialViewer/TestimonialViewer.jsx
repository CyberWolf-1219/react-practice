import React from "react";

function TestimonialViewer({
  userPhoto,
  userName = "UserName",
  userCompany = "Some Inc.",
  rating = 5,
  testimonial = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius cumque error eum inventore perspiciatis aut.",
}) {
  return (
    <div className="w-full h-full p-8 flex flex-col gap-8 bg-cyan-50 shadow-md ">
      <div className="w-full h-fit flex flex-row items-center jusitfy-start gap-4">
        <span>
          <img
            className="w-[80px] h-[80px] rounded-full"
            src={userPhoto}
            alt=""
          />
        </span>
        <span>
          <b className="text-gray-500 font-bold text-lg mb-4">{userName}</b>
          <p>{userCompany}</p>
        </span>
      </div>

      <div className="text-left">
        <div>
          {(() => {
            let stars = "";
            for (let i = 0; i < rating; i++) {
              stars += "⭐";
            }
            return stars;
          })()}
        </div>

        <div className="mt-4 text-left font-medium text-base">
          {testimonial}
        </div>
      </div>
    </div>
  );
}

export default TestimonialViewer;

import React, { useRef, useState } from "react";
import { UserCard, TestimonialViewer } from "../";
import userPhoto from "./../../assets/agents/Mask Group.png";

const dummyObjArray = [
  {
    userImage: userPhoto,
    rating: 5,
    userName: "Some User",
    userCompany: "Some Inc.",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id accusantium vel, doloribus ipsum molestiae nobis dolore! Qui, explicabo. Deserunt quaerat pariatur eaque quo, magni nobis necessitatibus sunt sit illo.",
  },
  {
    userImage: userPhoto,
    rating: 5,
    userName: "Some User",
    userCompany: "Some Inc.",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id accusantium vel, doloribus ipsum molestiae nobis dolore! Qui, explicabo. Deserunt quaerat pariatur eaque quo, magni nobis necessitatibus sunt sit illo.",
  },
  {
    userImage: userPhoto,
    rating: 5,
    userName: "Some User",
    userCompany: "Some Inc.",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id accusantium vel, doloribus ipsum molestiae nobis dolore! Qui, explicabo. Deserunt quaerat pariatur eaque quo, magni nobis necessitatibus sunt sit illo.",
  },
  {
    userImage: userPhoto,
    rating: 5,
    userName: "Some User",
    userCompany: "Some Inc.",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id accusantium vel, doloribus ipsum molestiae nobis dolore! Qui, explicabo. Deserunt quaerat pariatur eaque quo, magni nobis necessitatibus sunt sit illo.",
  },
  {
    userImage: userPhoto,
    rating: 5,
    userName: "Some User",
    userCompany: "Some Inc.",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id accusantium vel, doloribus ipsum molestiae nobis dolore! Qui, explicabo. Deserunt quaerat pariatur eaque quo, magni nobis necessitatibus sunt sit illo.",
  },
];

function TestimonilaPanel() {
  const testimonialObjArray = useRef(dummyObjArray);
  const [objectId, setObjectId] = useState(0);

  return (
    <div className="w-full h-[480px] flex flex-row items-center justify-center gap-20">
      <div className="w-[70%] h-full">
        <TestimonialViewer
          userPhoto={testimonialObjArray.current[objectId].userImage}
          rating={testimonialObjArray.current[objectId].rating}
          userName={testimonialObjArray.current[objectId].userName}
          userCompany={testimonialObjArray.current[objectId].userCompany}
          testimonial={testimonialObjArray.current[objectId].testimonial}
        />
      </div>

      <div className="w-[30%] h-full max-h-full flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
        {testimonialObjArray.current.map((object, index) => {
          return (
            <UserCard
              key={index}
              id={index}
              userName={object.userName}
              companyName={object.userCompany}
              userPhoto={object.userImage}
              setUserId={setObjectId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TestimonilaPanel;

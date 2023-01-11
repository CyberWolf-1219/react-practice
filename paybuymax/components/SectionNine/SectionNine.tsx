import React, { useState } from "react";
import Container from "../Container/Container";

function SectionNine() {
  const [valid, setValid] = useState(false);

  function onEmailEnter(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const currVal = event.currentTarget.value;
    const hit = currVal.match(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
    );

    if (hit) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return (
    <Container>
      <div
        className={`w-fit h-[500px] mx-auto flex flex-col items-center justify-center text-center`}
      >
        <p className={`text-accent font-semibold`}>SIGN UP FOR FREE!</p>
        <h3>Start Investing Today!</h3>
        <div
          className={`w-fit h-fit p-2 flex flex-row items-center justify-center gap-4 border-b-2 border-black`}
        >
          <span>
            <input
              type="email"
              name=""
              id=""
              placeholder={`Email...`}
              onChange={onEmailEnter}
              className={`w-[50ch] font-semibold text-lg outline-none`}
            />
          </span>
          <span>
            <button
              disabled={valid ? false : true}
              className={`font-semibold ${
                valid ? "text-accent" : "text-gray-500"
              }  transition-colors duration-1000`}
            >
              SUBSCRIBE
            </button>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default SectionNine;

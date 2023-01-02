import React from "react";
import Container from "../Container/Container";
import SmallButton from "../SmallButton/SmallButton";

function SectionEight() {
  function onSubmit(event: React.MouseEvent) {
    event.preventDefault();
  }

  return (
    <section>
      <Container classes={`p-4 rounded-lg `}>
        <div className={`text-center`}>
          <h2>Contact Us</h2>
        </div>
        <div className={`w-full h-fit max-w-screen-md mx-auto`}>
          <form
            autoComplete="false"
            className={`w-full h-fit flex flex-col items-center justify-start gap-4`}
            action="">
            <input
              className={`w-full h-fit rounded-md bg-white text-black p-2 font-semibold text-lg`}
              type="email"
              name="user_email"
              id="user_email_input"
              placeholder={`iamsuperman@kryptonium.com`}
            />
            <input
              className={`w-full h-fit rounded-md bg-white text-black p-2 font-semibold text-lg`}
              type="text"
              name="email_subject"
              id="email_subject_input"
              placeholder={`Martha...`}
            />
            <textarea
              className={`w-full h-fit rounded-md bg-white text-black p-2 font-semibold text-lg`}
              name="email_content"
              id="email_content_input"
              cols={30}
              rows={10}></textarea>
            <SmallButton action={onSubmit} text={`SEND`} />
          </form>
        </div>
      </Container>
    </section>
  );
}

export default SectionEight;

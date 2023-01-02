import React from "react";
import Container from "../Container/Container";

function SectionTwo() {
  return (
    <section>
      <Container classes={`relative p-8 rounded-xl`}>
        <h2 className={`w-fit h-fit mx-auto text-primary`}>About Us</h2>
        <p className={`w-fit h-fit mx-auto max-w-screen-sm text-center`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ipsa
          exercitationem deserunt magni itaque, minus maiores ut ab corporis,
          beatae doloribus dicta sit quos accusamus inventore dolorum officia
          quasi autem sapiente. Pariatur corporis temporibus ex, cum esse ipsam,
          nesciunt necessitatibus distinctio quisquam facilis earum nam eos
          perspiciatis repellendus repellat iure!
        </p>
      </Container>
    </section>
  );
}

export default SectionTwo;

import React from "react";
import Container from "../Container/Container";
import MemberCard from "../MemberCard/MemberCard";
import dummyImage from "../../assets/user.jpg";

function SectionSix() {
  return (
    <section>
      <Container classes={ `p-4 text-center  rounded-lg` }>
        <div className={ `w-full h-fit max-w-screen-sm p-4 mx-auto text-center` }>
          <h2>Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            sit quae ab similique optio eius praesentium ea a, nobis libero.
          </p>
        </div>
        <div
          className={ `w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4` }>
          <MemberCard
            image={ dummyImage }
            name={ `Someone Maybe` }
            role={ `Webdeveloper` }
            bio={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quisquam modi corporis tempore quidem aperiam exercitationem ipsum deleniti vel est?` }
            facebook={ `www.facebook.com` }
            instagram={ `www.instagram.com` }
            twitter={ `www.twitter.com` }
            linkedin={ `www.linkedin.com` }
          />
          <MemberCard
            image={ dummyImage }
            name={ `Someone Maybe` }
            role={ `Webdeveloper` }
            bio={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quisquam modi corporis tempore quidem aperiam exercitationem ipsum deleniti vel est?` }
            facebook={ `www.facebook.com` }
            instagram={ `www.instagram.com` }
            twitter={ `www.twitter.com` }
            linkedin={ `www.linkedin.com` }
          />
          <MemberCard
            image={ dummyImage }
            name={ `Someone Maybe` }
            role={ `Webdeveloper` }
            bio={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quisquam modi corporis tempore quidem aperiam exercitationem ipsum deleniti vel est?` }
            facebook={ `www.facebook.com` }
            instagram={ `www.instagram.com` }
            twitter={ `www.twitter.com` }
            linkedin={ `www.linkedin.com` }
          />
          <MemberCard
            image={ dummyImage }
            name={ `Someone Maybe` }
            role={ `Webdeveloper` }
            bio={ `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quisquam modi corporis tempore quidem aperiam exercitationem ipsum deleniti vel est?` }
            facebook={ `www.facebook.com` }
            instagram={ `www.instagram.com` }
            twitter={ `www.twitter.com` }
            linkedin={ `www.linkedin.com` }
          />
        </div>
      </Container>
    </section>
  );
}

export default SectionSix;

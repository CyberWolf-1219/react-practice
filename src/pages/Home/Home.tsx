import React from "react";
import "./Home.css";

import {
  prop_blob,
  prop_leaves_1,
  prop_leaves_2,
  prop_snowflake,
  prop_snowman,
  section_1_image,
  section_2_image,
  section_4_image,
} from "../../assets";

import { Sponsorbar, Slider } from "../../components";

const Home: React.FC = () => {
  return (
    <>
      <section className="hero_section">
        <img className="prop" src={prop_leaves_1} alt="" />
        <img className="prop" src={prop_leaves_1} alt="" />
        <img className="prop" src={prop_snowflake} alt="" />
        <img className="prop" src={prop_snowflake} alt="" />
        <h1>
          Enjoy Wonderful <br />
          Experience on Winter
        </h1>
        <p>Find popular destinations and staycations around the world</p>
        <span>
          <button>Be Our Guest</button>
          <a href="#">Need a help?</a>
        </span>
        <div className="main_graphics">
          <img className="prop" src={prop_leaves_2} alt="" />
          <img className="hero" src={section_1_image} alt="hero" />
        </div>
      </section>
      <section className="section_2">
        <Sponsorbar />
        <div className="main_graphics">
          <div className="left">
            <img src={section_2_image} alt="" />
          </div>
          <div className="right">
            <h2>Check for Our Availability Here</h2>
            <h4>We will always have the sweetest rate</h4>
            <div>
              <span>
                <b>9</b>
                <p>Years Experience</p>
              </span>
              <span>
                <b>350</b>
                <p>Fancy Destinations</p>
              </span>
              <span>
                <b>70K+</b>
                <p>Loyal Customers</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section_3">
        <img src={prop_leaves_1} alt="" className="prop" />
        <img src={prop_leaves_1} alt="" className="prop" />
        <h2>Let's Travel and Hit the Trip</h2>
        <h4>Dicover and Book the Trip Virtually</h4>
        <Slider />
      </section>
      <section className="section_4">
        <h2>Jump Ahead Through Global Maps</h2>
        <h3>Discover your destinations around the world</h3>
        <img src={section_4_image} alt="" />
      </section>
      <section className="section_5">
        <img src={prop_snowflake} alt="" className="prop" />
        <img src={prop_blob} alt="" className="prop" />

        <div className="left">
          <h2>We don't do conventional. We do fun with our guests.</h2>
          <h3>Don't miss out our newsletter, folks.</h3>
          <div>
            <input type="email" name="user_email" id="user_email_input" />
            <button>Subscribe Newsletter</button>
          </div>
        </div>

        <div className="right">
          <img src={prop_snowman} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;

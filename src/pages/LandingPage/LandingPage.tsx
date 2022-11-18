import React from "react";
import "./Landingpage.css";
import {
  section_1_image,
  section_2_image_1,
  section_2_image_2,
  section_2_image_3,
  section_3_image_1,
  section_3_image_2,
  section_3_image_3,
  prop_2,
  prop_3,
  prop_4,
} from "../../assets";

import Testimonials from "../../data/Testimonials";

import { TestimonialCard } from "../../components";

const LandingPage: React.FC = () => {
  return (
    <main>
      <section className="section_1">
        <div className="section_item_wrapper">
          <div className="left">
            <h1>We Build Apps & Websites for Your Business</h1>
            <h4>For startups, For businesses & For you.</h4>
            <button className="section_1_cta">REQUEST A QUOTE</button>
          </div>
          <div className="right">
            <img src={section_1_image} alt="hero" />
          </div>
        </div>
      </section>

      <section className="section_2">
        <div className="section_item_wrapper">
          <h2>We are specialized in</h2>
          <div>
            <span>
              <img src={section_2_image_1} alt="" />
              <strong>UI/UX Design</strong>
              <small>
                In hac habitasse platea dictumstmus adipiscing fermentum quam
                volutpat aliquam. Integer cilisis tristique.
              </small>
            </span>
            <span>
              <img src={section_2_image_2} alt="" />
              <strong>Web Development</strong>
              <small>
                In hac habitasse platea dictumstmus adipiscing fermentum quam
                volutpat aliquam. Integer cilisis tristique.
              </small>
            </span>
            <span>
              <img src={section_2_image_3} alt="" />
              <strong>App Development</strong>
              <small>
                In hac habitasse platea dictumstmus adipiscing fermentum quam
                volutpat aliquam. Integer cilisis tristique.
              </small>
            </span>
          </div>
        </div>
      </section>

      <section className="section_3">
        <div className="section_item_wrapper">
          <div>
            <div className="left">
              <img src={prop_2} alt="" className="section_3_prop" />
              <h3>Experienced Designers & Developers</h3>
              <p>
                Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                sollicitudin, erat a elementum rutrum, neque sem pretium metus,
                quis mollis nisl nunc et massa.
              </p>
              <p>
                Vestibulum sed metus in lorem tristique ullamcorper id vitae
                erat. Nulla mollis sapien sollicitudin lacinia{" "}
              </p>
            </div>
            <div className="right">
              <img src={section_3_image_1} alt="" className="section_3_image" />
            </div>
          </div>

          <div>
            <div className="left">
              <img src={section_3_image_2} alt="" className="section_3_image" />
            </div>
            <div className="right">
              <img src={prop_3} alt="" className="section_3_prop" />
              <h3>Information Archietecture & Visual Prototyping</h3>
              <p>
                Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                sollicitudin, erat a elementum rutrum, neque sem pretium metus,
                quis mollis nisl nunc et massa.
              </p>
              <p>
                Vestibulum sed metus in lorem tristique ullamcorper id vitae
                erat. Nulla mollis sapien sollicitudin lacinia lacinia. Nam
                dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin,
                erat a elementum rutrum, neque sem pretium metus, quis mollis
                nisl nunc et massa
              </p>
            </div>
          </div>

          <div>
            <div className="left">
              <img src={prop_4} alt="" className="section_3_prop" />
              <h3>Idea Generation & Foundation</h3>
              <p>
                Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                sollicitudin, erat a elementum rutrum, neque sem pretium metus,
                quis mollis nisl nunc et massa. Nam dapibus nisl vitae elit
                fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
                neque sem{" "}
              </p>
            </div>
            <div className="right">
              <img src={section_3_image_3} alt="" className="section_3_image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section_4">
        <div className="section_item_wrapper">
          {Testimonials.map((item, index) => {
            return (
              <TestimonialCard
                key={index}
                userImage={item.img}
                userName={item.name}
                userRole={item.role}
                userComment={item.comment}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default LandingPage;

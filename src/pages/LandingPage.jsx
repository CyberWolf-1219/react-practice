import { section_2_img, section_2_extra_1, section_2_extra_2, section_3_img, section_3_extra_4, section_4_img, qr_code, section_1_img, featured_review_client_pic } from "./../assets/images"

import { ShowcaseCard, FeatureCard, GuaranteeCard } from "./../components"

import Features from "./../data/Features"
import Showcases from "./../data/Showcases";
import Guarantees from "./../data/Guarantees"

const LandingPage = () => {
    return (
        <>
            <section id="section-1">
                <div id="hero-left">
                    <h4>
                        Real Leather
                    </h4>
                    <h1>
                        Summer Sale<br />
                        <span>
                            34% OFF
                        </span>
                    </h1>
                    <p>
                        Snake plant’s gorgeous world-shaped leaves colored with mottlet greens are briliantly captured in this striking faux plant. Planted in a clean, contemporary white case
                    </p>
                    <button>GET STARTED</button>
                    <div id="brand-value-em">
                        {
                            Showcases.map((item, index) => {
                                return (
                                    <ShowcaseCard
                                        icon={item.img}
                                        title={item.title}
                                        desc={item.desc}
                                        key={index} />
                                );
                            })
                        }
                    </div>
                </div>
                <div id="hero-right">
                    <img id="hero-img" src={section_1_img} alt="hero" />
                    <div id="featured-testimonial">
                        <div>
                            <img src={featured_review_client_pic} alt="client testimonial" />
                            <div className="details-container">
                                <span>Mary Hardy</span>
                                <span>TUE 24, JANUARY 2022</span>
                            </div>
                            <div className="rating-container">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                        <p>In Just a Few short years . I build the brand to millions o f social media followers</p>

                    </div>
                </div>
            </section>
            <section id="section-2">
                <div>
                    <img src={section_2_img} alt="" />
                </div>
                <div>
                    <img src={section_2_extra_1} alt="" />
                    <img src={section_2_extra_2} alt="" />
                </div>
                <div>
                    <div>
                        <img src={section_3_extra_4} alt="" />
                    </div>
                    <h2>
                        About Us
                    </h2>
                    <p>
                        This Luxurious shower gel effectivly cleanses the body, swiftly capturing drit and grime that may be lingering at the surface
                    </p>
                    <button>
                        Browse Full Collection
                    </button>
                </div>
            </section>
            <section id="section-3">
                <div>
                    <img src={section_3_img} alt="" />
                </div>
                <div>
                    <h2>Whats New?</h2>
                    {
                        Features.map((item, index) => {
                            return <FeatureCard
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                key={index}
                            />
                        })
                    }
                </div>
            </section>
            <section id="section-4">
                <div>
                    <b>02</b>
                    <h2>
                        Benjoour Sunshine Liguid Bronzer Shade
                    </h2>
                    <p>
                        Yet preference connection unpleasant yet melancholy but end appernance partiality estimating termenated day everythingYet preference connection unpleasant yet melancholy but end appernance partiality estimating termenated day everything
                    </p>
                    <div>
                        <button>GET DISCOUNT CODE</button>
                        <img src={qr_code} alt="" />
                    </div>
                </div>
                <div>
                    <img src={section_4_img} alt="" />
                </div>
            </section>
            <section id="section-5">
                <div>
                    <h2>
                        Authentic Product
                    </h2>
                    <p>
                        Confined smallest unpacked delicate. Why sir end believe uncivil respect . Always get adieus nature day course for common. My little garret repair to desire he esteem
                    </p>
                    <button>Explore More</button>
                </div>
                <div>
                    {
                        Guarantees.map((item, index) => {
                            return <GuaranteeCard
                                icon={item.img}
                                title={item.title}
                                desc={item.desc}
                                key={index}
                            />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default LandingPage;
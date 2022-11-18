import "./footer.css"
import navlinks from "../../data/Navlinks";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";

const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer-content">
                    <span>
                        <img src={logo} alt="" />
                        <span>sales@uikit.to</span>
                    </span>
                    <span>
                        <span>
                            {
                                navlinks.map((item, index) => {
                                    return (
                                        <Link path={item.link} key={index}>
                                            <li>{item.title}</li>
                                        </Link>
                                    )
                                })
                            }
                        </span>
                        <span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </span>
                    <span>
                        <span>STAY UP TO DATE</span>
                        <div>
                            <input type="email" name="email" id="user-email"
                                placeholder="Your Email Address"
                            />
                            <span>
                                <i class="bi bi-send"></i>
                            </span>
                        </div>
                    </span>
                </div>
            </footer>
        </>
    );
}

export default Footer;
import "./navigation.css"

import { navlinks, contact_us_link } from "./../../data/Navlinks"
import { Link } from "react-router-dom"
import { logo } from "../../assets/images";

const Navigation = () => {
    return (
        <>
            <nav>
                <Link path={"/"}>
                    <span id="logo">
                        <img src={logo} alt="logo" />
                    </span>
                </Link>
                <ul>
                    {
                        navlinks.map((navlink, index) => {
                            return (
                                <Link path={navlink.link} key={index}>
                                    <li >{navlink.title}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
                <Link to={contact_us_link}>
                    <button>CONTACT US</button>
                </Link>
            </nav>
        </>
    );
}

export default Navigation;
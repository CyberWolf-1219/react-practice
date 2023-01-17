import "./footer.css";
import { logo } from "../../assets/images";
import {
  contactInfo,
  footerNavLinks,
  socialLinks,
  copyrightText,
} from "../../data/FooterLink";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <span>
          <img src={logo} alt="logo" />
        </span>

        <div>
          <div id="address">{contactInfo.address}</div>
          <div id="tel">{contactInfo.tel}</div>
          <div id="email">{contactInfo.email}</div>
        </div>

        <div>
          {footerNavLinks.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                {item.title}
              </a>
            );
          })}
          <span>{copyrightText}</span>
        </div>

        <div>
          {socialLinks.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

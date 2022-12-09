import "../../components/Footer/Footer.css";
import Location from "../../images/location.svg";
import Twitter from "../../images/twitter.svg";
import Blog from "../../images/blog.svg";
import Company from "../../images/company.svg";

function Footer({ location, blog, twitter, company, toggle }) {
  return (
    <div className="footer">
      <div className="footerSubContainers">
        <img src={Location} className="locationImg" alt="locationIcon" />
        <p className={toggle ? "darkFooterText" : "footerText"}>
          {location ? location : "Not Available"}
        </p>
      </div>

      <div className="footerSubContainers">
        <img src={Twitter} className="twitterImg" alt="twitterIcon" />
        <p className={toggle ? "darkFooterText" : "footerText"}>
          {twitter ? twitter : "Not Available"}
        </p>
      </div>

      <div className="footerSubContainers">
        <img src={Blog} className="blogImg" alt="blogIcon" />
        <a className={blog && toggle ? "darkFooterText" : "nolink"} href={blog}>
          {blog ? blog : "Not Available"}
        </a>
      </div>

      <div className="footerSubContainers">
        <img src={Company} className="companyImg" alt="BuildingIcon" />
        <p className={toggle ? "darkFooterText" : "footerText"}>
          {company ? company : "Not Available"}
        </p>
      </div>
    </div>
  );
}
export default Footer;

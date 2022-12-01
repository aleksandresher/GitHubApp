import "../../components/Footer/Footer.css";

function Footer({ location, blog, twitter, company, toggle }) {
  return (
    <div className="footer">
      <div className="footerSubContainers">
        <img
          src="../images/location.svg"
          className="locationImg"
          alt="locationIcon"
        />
        <p className={toggle ? "darkFooterText" : "footerText"}>
          {location ? location : "Not Available"}
        </p>
      </div>

      <div className="footerSubContainers">
        <img
          src="../images/twitter.svg"
          className="twitterImg"
          alt="twitterIcon"
        />
        <p className={toggle ? "darkFooterText" : "footerText"}>
          {twitter ? twitter : "Not Available"}
        </p>
      </div>

      <div className="footerSubContainers">
        <img src="../images/blog.svg" className="blogImg" alt="blogIcon" />
        <a className={blog && toggle ? "darkFooterText" : "nolink"} href={blog}>
          {blog ? blog : "Not Available"}
        </a>
      </div>

      <div className="footerSubContainers">
        <img
          src="../images/company.svg"
          className="companyImg"
          alt="BuildingIcon"
        />
        <p className={toggle ? "darkFooterText" : "footerText"}>
          {company ? company : "Not Available"}
        </p>
      </div>
    </div>
  );
}
export default Footer;

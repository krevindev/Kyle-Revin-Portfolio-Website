import { motion } from "framer-motion";

const techSkills = [
  { key: "react", imgSrc: "react-logo.svg", techName: "ReactJS" },
  { key: "node", imgSrc: "nodejs-logo.svg", techName: "NodeJS" },
  { key: "html", imgSrc: "html5-logo.svg", techName: "HTML5" },
  { key: "firebase", imgSrc: "firebase-logo.svg", techName: "Firebase" },
  { key: "express", imgSrc: "expressjs-logo.svg", techName: "ExpressJS" },
  { key: "javascript", imgSrc: "javascript-logo.svg", techName: "JavaScript" },
  { key: "css", imgSrc: "css-logo.svg", techName: "CSS3" },
  { key: "python", imgSrc: "python-logo.svg", techName: "Python" },
  { key: "jquery", imgSrc: "jquery-logo.svg", techName: "JQuery" },
  { key: "mongodb", imgSrc: "mongoDB-logo.svg", techName: "MongoDB" },
  { key: "next", imgSrc: "nextjs-logo.svg", techName: "NextJS" },
  { key: "typescript", imgSrc: "typescript-logo.svg", techName: "TypeScript" },
  { key: "tailwind", imgSrc: "tailwind-logo.svg", techName: "Tailwind CSS" },
];

const ssPath = "/res/images/screenshots/";

export default function PortfolioItem(props) {
  const isSourceLinkValid = !["", null, undefined].includes(
    props.sourceCodeLink,
  );
  const isPreviewLinkValid = !["", null, undefined].includes(props.previewLink);
  const isNoticeValid = !["", null, undefined].includes(props.notice);

  const colorValue = {
    orange: "#CD5A07",
    red: "#E3031E",
  };

  const noticeColor = colorValue[props.noticeColor];

  const handleBtnClick = (passedLink) => {
    window.open(passedLink, "_blank");
  };

  return (
    <motion.div
      key={props.index}
      className={
        isNoticeValid ? "portfolio-item glitching-portfolio" : "portfolio-item"
      }
      style={{
        animationDelay: props.i * 0.2 + 1 + "s",
        backdropFilter: !props.isMobile && "blur(10px)",
      }}
    >
      <div className="portfolio-upper-container">
        <div
          className="portfolio-img-container"
          style={{
            backgroundImage: `url(${ssPath + props.thumbnailFile})`,
          }}
        >
          <div className="cover" />
        </div>

        <div className="portfolio-name-container">
          <h3>{props.title}</h3>
        </div>
        <div className="portfolio-notice-container">
          {isNoticeValid && (
            <>
              <h5 className="portfolio-notice">Notice:</h5>
              <p
                style={{
                  background: noticeColor,
                  borderRadius: "5px",
                  padding: "2px 5px",
                  color: "white",
                  fontSize: "10px",
                }}
                className="portfolio-notice"
              >
                {props.notice}
              </p>
            </>
          )}
        </div>

        <div className="portfolio-details-container">
          <p>{props.details}</p>
        </div>
        <div className="portfolio-stack-container">
          {props.techUsed &&
            props.techUsed.map((techKey) => {
              const filteredTech = techSkills.find(
                (skill) => skill.key === techKey,
              );
              return filteredTech ? (
                <PortfolioTechUsed
                  src={filteredTech.imgSrc}
                  name={filteredTech.techName}
                />
              ) : null;
            })}
        </div>
      </div>

      <div className="portfolio-btns-container">
        {/* <button
          className={!isSourceLinkValid && "invalid-link"}
          onClick={() =>
            isSourceLinkValid && handleBtnClick(props.sourceCodeLink)
          }
        >
          Source Code
        </button> */}

        <button
          className={!isPreviewLinkValid && "invalid-link"}
          onClick={() =>
            isPreviewLinkValid && handleBtnClick(props.previewLink)
          }
        >
          Live Demo
          {isPreviewLinkValid && (
            <img
              style={{ height: 14, marginLeft: 5 }}
              src="/res/images/svg/newtab-icon.svg"
            />
          )}
        </button>
      </div>
    </motion.div>
  );
}

function PortfolioTechUsed({ src, name }) {
  return (
    <div className="tech-used">
      <img src={"/res/images/svg/tech_stack/" + src} alt={src} />
      <p>{name}</p>
    </div>
  );
}

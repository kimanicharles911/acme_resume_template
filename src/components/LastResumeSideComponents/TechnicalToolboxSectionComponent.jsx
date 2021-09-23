/* I imported the needed icon from the react-icons library. */
import { FaTools } from "react-icons/fa";

/* I created a functional compnent */
const TechnicalToolboxSectionComponent = () => {

  /* I added the technologies I know in an array */
  const technologies = ["Reactjs", "Redux", "Expressjs", "Nodejs", "MongoDB", "JQuery", "Javascript"];

  /* I wrote a simple function to refactor bootstrap's text-muted class because it is used multiple times.*/
  const textMute = () => {
    return "text-muted";
  };

  /* I wrote a simple function to refactor bootstrap's badge bg-secondary classes because it is used multiple times.*/
  const technicalToolboxStyles = () => {
    return "badge bg-secondary";
  };

  return (
    /* Below is the JSX for the technical toolboxs section of my site. */
    <div className="mt-3">
      <FaTools size={28} className={textMute()} />
      <h4 className={textMute()} style={{ display: "inline" }}>&nbsp;TECHNICAL TOOLBOX</h4>
      <hr />
      <h5 className="mb-3">
        {technologies.map((technology, index) => {
          /* I learnt to create an empty space in JSX from: https://jsfiddle.net/omerts/b4st33nw/ */
          return <span key={index}><span className={technicalToolboxStyles()} key={index}>{technology}</span>{'\u00A0'}</span>;
        })}
      </h5>
    </div>
  );
};
export default TechnicalToolboxSectionComponent;
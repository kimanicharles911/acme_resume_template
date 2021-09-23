/* I imported the needed icon from the react-icons library. */
import { FaGitSquare, FaExternalLinkAlt } from "react-icons/fa";

/* I created a functional compnent */
const ProjectsSectionComponent = () => {
  /* I added my projects in an array */
  const projects = ["Device Shop", "Olivetan Gallery", "Social Cards", "Vote Counting App"];

  /* I wrote a simple function to refactor bootstrap's text-muted class because it is used multiple times.*/
  const textMute = () => {
    return "text-muted";
  };

  return (
    /* Below is the JSX for my projects section of my site. */
    <div className="mt-4">
      <FaGitSquare size={28} className={textMute()} />
      <h4 className={textMute()} style={{ display: "inline" }}>&nbsp;PROJECTS</h4>
      <hr />
      <div className="container fluid">
        <div className="row">
          <div className="col">
            <ol className="project-list">
              {projects.map((project, index) => {
                return <li key={index} className="mt-3"><a href="#" key={index}><p key={index}>{project} <FaExternalLinkAlt key={index} /></p></a></li>
              })}
            </ol>
          </div>
          <div className="col">
            <ol className="project-list" start="5">
              <li>
                <a href="#"><p>Weather App (GraphQL & React) <FaExternalLinkAlt /></p></a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsSectionComponent;
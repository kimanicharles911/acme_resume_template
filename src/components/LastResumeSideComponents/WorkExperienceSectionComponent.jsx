/* I imported the needed icon from the react-icons library. */
import { FaBuilding  } from "react-icons/fa";

/* I created a functional compnent */
const WorkExperienceSectionComponent = () => {

  /* I wrote a simple function to refactor bootstrap's text-muted class because it is used multiple times.*/
  const textMute = () => {
    return "text-muted";
  };
  
  return(
    /* Below is the JSX for the work experience section of my site. */
    <div className="mt-3">
      <FaBuilding size={28} className={textMute()}/>
      <h4 className={textMute()} style={{display: "inline"}}>&nbsp;WORK EXPERIENCE</h4>
      <hr />
      <p><strong>Software Engineer Intern, Competa Millman</strong></p>
      <p className={`${textMute()} mt-2`}>01/2019 - 04/2019</p>
      <p className="mt-2">I was at a University Internship as a Software Engineer where I was part of a team developing a fintech sacco web application. I co-developed a dynamic, secure fintech web application able to register multiple saccos on one platform independently and provide front and back office business solutions. I learned how to use the scrum development methodology, use project planning tools such as trello, lead intern stand ups and collaborate on projects through git.</p>        
    </div>  
  );
};
export default WorkExperienceSectionComponent;
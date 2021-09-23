/* I imported the needed icon from the react-icons library. */
import { FaUser } from "react-icons/fa";

/* I created a functional compnent */
const SoftwareEngineerSectionComponent = () => {

  /* I wrote a simple function to refactor bootstrap's text-muted class because it is used multiple times.*/
  const textMute = () => {
    return "text-muted";
  };

  return (
    /* Below is the JSX for my software engineer section of my site. */
    <div className=" mt-3">
      <FaUser size={28} className={textMute()} />
      <h4 className={textMute()} style={{ display: "inline" }}>&nbsp;SOFTWARE ENGINEER</h4>
      <hr />
      <ol>
        <li><p>Problem solver, fast learner and hard working to write well-designed, testable and efficient code using best practices in Web development.</p></li>
        <li><p>Skilled team player able to strive to design and collaborate on complex projects - from concept, navigation, layout and programming to SEO.</p></li>
      </ol>
    </div>
  );
};
export default SoftwareEngineerSectionComponent;
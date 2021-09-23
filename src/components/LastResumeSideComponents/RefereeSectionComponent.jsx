/* I imported the needed icon from the react-icons library. */
import { IoPeopleCircleOutline } from "react-icons/io5";

/* I created a functional component */
const RefereeSectionComponent = () => {

  /* I wrote a simple function to refactor bootstrap's text-muted class because it is used multiple times.*/
  const textMute = () => {
    return "text-muted";
  };

  return (
    /* Below is the JSX for the referee section of my site. */
    <div className="mt-3">
      <IoPeopleCircleOutline size={28} className={textMute()} />
      <h4 className={textMute()} style={{ display: "inline" }}>&nbsp;REFEREE</h4>
      <hr />
      <div className="row">
        <div className="col">
          <ol>
            {/* JSX to render first referee */}
            <li>
              <p><strong>Stanley Ndagi</strong></p>
              <p>Senior Software Engineer</p>
              <p>CircleCI</p>
              <p>Tel No.: <span><strong>+254718154504</strong></span></p>
              <p>Email: ndagis@gmail.com</p>
            </li>
          </ol>
          <hr />
        </div>
        <div className="col">
          <ol>
            {/* JSX to render second referee */}
            <li>
              <p><strong>John Macharia</strong></p>
              <p>Software Engineer in Test</p>
              <p>Safaricom PLC</p>
              <p>Tel No.: <span><strong>+25472098582</strong></span></p>
              <p>Email: machariajohn20@gmail.com</p>
            </li>
          </ol>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default RefereeSectionComponent;
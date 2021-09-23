/* I imported the needed icon from the react-icons library. */
import { FaUserGraduate  } from "react-icons/fa";

const EducationSectionComponent = () => {

  /* I created a functional compnent */
  const textMute = () => {
    return "text-muted";
  };
  
  return(
    /* Below is the JSX for the about section of my site. */
    <div className=" mt-3">
      <FaUserGraduate size={28} className={textMute()}/>
      <h4 className={textMute()} style={{display: "inline"}}>&nbsp;EDUCATION</h4>
      <hr />
      <p><strong>BSc. Business Information Technology | Dedan Kimathi University</strong></p>
      <p className={`${textMute()} mt-2`}>09/2016 - 05/2020</p>
      <p className="mt-2"><strong>Fullstack Web Development | HyperionDev Bootcamp</strong></p>
      <p className={`${textMute()} mt-2`}>06/2021 - Present</p>
    </div>
  ); 
};
export default EducationSectionComponent;
/* This project was inspired by: https://jonbloomer.com.au/ */
/* I imported the profile picture used in my site.
I imported needed icons from the rect-icons library.
I also imported my custom stylesheet. */
import profilePicture from "../images/charles_kimani.jpg";
import { FaLocationArrow, FaEnvelope, FaBlog, FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";
import "./style.css"

/* I created my function component */
const FirstResumeSideComponent = () => {

  return(
    <div className="col-md-77 col-lg-4 text-center">
      {/* This is where I added my profile picture, name and my profession */}
      <img src={profilePicture} role="presentation" alt="passport_profile_photo" className="img-circle center-block rounded-circle" width="200" />
      <h4 className="mt-3">Charles Kimani</h4>
      <h5 className="text-muted">Software Engineer</h5>
      <hr />
      {/* In this list I added my location and email address */}
      <ul>
        <li>
          <FaLocationArrow />
          <p style={{display: "inline"}}> Nyeri,Kenya</p>            
        </li>
        <li className="mt-2">
          <FaEnvelope />
          <p style={{display: "inline"}}> kimanicharles911@gmail.com</p>
        </li>
      </ul>
      <hr />
      <ul>
        {/* In this list I added my social networks */}
        <li>
          <a  href="https://techblog.charleskimani.com/" target="_blank" rel="noopener noreferrer"><FaBlog size={28} /></a>&nbsp;
          <a  href="https://stackoverflow.com/users/9497346/charleskimani/" target="_blank" rel="noopener noreferrer"><FaStackOverflow size={28} /></a>&nbsp;
          <a  href="https://www.linkedin.com/in/kimanicharles/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={28} /></a>&nbsp;
          <a  href="https://github.com/kimanicharles911/" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>&nbsp;
        </li>
      </ul>
      <hr />
      <p><small>This online resume is made with React and is open source under my MIT License. The source code can be found here.</small></p>      
    </div>
  );
};
export default FirstResumeSideComponent;
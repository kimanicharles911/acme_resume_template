/* This project was inspired by: https://jonbloomer.com.au/ */
/* I imported the needed icon from the react-icons library. */
import { FaUserSecret  } from "react-icons/fa";

/* I created a functional component */
const AboutSectionComponent = () => {
  
  return(
    /* Below is the JSX for the about section of my site. */
    <>
      <FaUserSecret size={28} className="text-muted" />
      <h4 className="text-muted" style={{display: "inline"}}>&nbsp;ABOUT</h4>
      <hr />
      <p>I'm a Nyeri, Kenya based Software Engineer looking for a job. I take part in serving my Nation 🇰🇪 and the World for them to have top-scale software that entirely fulfills their goals and makes life blissful. You can jump to the projects section and see solutions that I have made. In 2020 I graduated with a Bachelor's degree in Business Information Technology from Dedan Kimathi University. As I look for a job I am a FullStack Web Development Student at The HyperionDev bootcamp learning MongoDB, Expressjs, Reactjs, Nextjs and Nodejs.</p>  
    </>
  ); 
};
export default AboutSectionComponent;
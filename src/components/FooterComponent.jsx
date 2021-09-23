/* I imported the icon that shows open link in new tab from the react-icons library. */
import { FaExternalLinkAlt  } from "react-icons/fa";

/* I created a component for the footer elements */
const FooterComponent = () => {

  return(
    <footer class="text-center">
      <p>All Rights Reserved | Made by &#169; <a href="https://github.com/kimanicharles911/" target="_blank" rel="noopener noreferrer">Charles</a> <FaExternalLinkAlt /></p>
    </footer>
  );
};
export default FooterComponent;
/* This project was inspired by: https://jonbloomer.com.au/ */
/* This is actually my major component, as it holds the right side of my site.
I imported all the components needed for this side of my website.
*/
import AboutSectionComponent from "./LastResumeSideComponents/AboutSectionComponent.jsx";
import EducationSectionComponent from "./LastResumeSideComponents/EducationSectionComponent.jsx";
import SoftwareEngineerSectionComponent from "./LastResumeSideComponents/SoftwareEngineerSectionComponent.jsx";
import TechnicalToolboxSectionComponent from "./LastResumeSideComponents/TechnicalToolboxSectionComponent.jsx";
import ProjectsSectionComponent from "./LastResumeSideComponents/ProjectsSectionComponent.jsx";
import WorkExperienceSectionComponent from "./LastResumeSideComponents/WorkExperienceSectionComponent.jsx";
import RefereeSectionComponent from "./LastResumeSideComponents/RefereeSectionComponent.jsx";

const LastResumeSideComponent = () => {

  return(
    <div className="col-md-5 col-lg-8 order-md-last">
      <AboutSectionComponent />
      <EducationSectionComponent />
      <SoftwareEngineerSectionComponent />
      <TechnicalToolboxSectionComponent />
      <ProjectsSectionComponent />
      <WorkExperienceSectionComponent />
      <RefereeSectionComponent />  
    </div>
  );
};
export default LastResumeSideComponent;
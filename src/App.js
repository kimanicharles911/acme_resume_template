/* This project was inspired by: https://jonbloomer.com.au/ */
/* I imported the FirstResumeSideComponent, LastResumeSideComponent and FooterComponent. */
import FirstResumeSideComponent from "./components/FirstResumeSideComponent.jsx";
import LastResumeSideComponent from "./components/LastResumeSideComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import './App.css';

/* I converted the App component to an arrow function component since I love arrow functions.  */
const App = () => {
  return (
    /* I made the top level element to use bootstrap.
    I added the three components the three components. */
    <main className="container fluid mt-3">
      <div className="row g-5">
        {/* I add the  */}
        <FirstResumeSideComponent />
        <LastResumeSideComponent />
      </div>
      <FooterComponent />
    </main>
  );
}

export default App;

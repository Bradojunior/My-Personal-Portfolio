import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FirstNav from "./components/FirstNav";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <>
      <FirstNav />
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </>
  );
}

export default App;

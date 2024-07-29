import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CanvasContainer from "./components/CanvasContent";
import Loader from "./components/Loader";
import Webgi from "./components/webgi";
import Customizer from "./components/Customizer";
import Service from "./components/Service";
import Contact from "./components/Contact"
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      
      <Loader/>
      <Header />

      <Customizer/>
      
      <CanvasContainer />
      <MainContent />
      <Team/>
      <Contact/>
      <Footer/>
    
      
    </div>
  );
}
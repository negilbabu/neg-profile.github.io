
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Services from "./components/Services";



function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Services />
      <Work />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
 
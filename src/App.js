import Portfolio from './components/Portfolio';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './components/navbar';
import Skills from './components/skills';
import SocialLinks from './components/socilaLinks';
import './index.css'

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;

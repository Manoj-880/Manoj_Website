import Portfolio from './components/Portfolio';
import About from './components/about';
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

      <SocialLinks/>
    </div>
  );
}

export default App;

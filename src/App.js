import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ParticlesBackground from './components/ParticlesBackground.js';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {


  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

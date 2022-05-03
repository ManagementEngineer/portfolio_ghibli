import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ParticlesBackground from './components/ParticlesBackground.js';


function App() {


  return (
    <div className="App">
      <ParticlesBackground />
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

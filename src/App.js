import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ParticlesBackground from './components/ParticlesBackground.js';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Layout from './components/Layout';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>




      {/* <NavBar /> */}
      {/* <Home />
      <About />
      <Portfolio />
      <Contact /> */}
    </div>
  );
}

export default App;

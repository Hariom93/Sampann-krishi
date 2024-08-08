import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import About from './components/About';
import Careers from './components/Careers';
import Herbicides from './components/Herbicides';
import Fungisides from './components/Fungisides';
import Seeds from './components/Seeds';
import Insectisedes from './components/Insectisedes';
import FarmMachinery from './components/FarmMachinery';
import AgriMarketing from './components/AgriMarketing';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {

  const [sideBar, setSideBar] = useState();

  return (
    <div>
      <Navbar setSideBar={setSideBar} />
      <Routes>
        <Route path='/' element={<Home sideBar={sideBar} setSideBar={setSideBar} />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/herbicides' element={<Herbicides />} />
        <Route path='/fungisides' element={<Fungisides />} />
        <Route path='/insectisedes' element={<Insectisedes />} />
        <Route path='/seeds' element={<Seeds />} />
        <Route path='/farm machinery' element={<FarmMachinery />} />
        <Route path='/agriMarketing' element={<AgriMarketing />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

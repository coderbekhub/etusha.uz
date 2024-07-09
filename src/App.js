import './Global.scss';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurAbout from './Pages/OurAbout';
import Contact from './Pages/Contact';
import OurProjects from './Pages/OurProjects';
import Sewing from './Pages/ourProjects/Sewing'
import Hairdresser from './Pages/ourProjects/Hairdresser'
import ChemicalCleaning from './Pages/ourProjects/ChemicalCleaning'
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter >
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/ourAbout' element={ <OurAbout /> } />
          <Route path='/ourProjects' element={ <OurProjects /> } />
          <Route path='/Contact' element={ <Contact /> } />
          <Route path='/sewing' element={ <Sewing /> } />
          <Route path='/hairdresser' element={ <Hairdresser /> } />
          <Route path='/chemicalCleaning' element={ <ChemicalCleaning /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

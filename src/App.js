import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import FicheLogements from './pages/FicheLogements/FicheLogements';
import About from './pages/About/About';
import Error from './pages/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ficheLogement/:id' element={<FicheLogements/>}/>
          <Route path='/about' element={<About/>}/>
          
          <Route path='*' element={<Error/>}/>
        </Routes>
      </main>
      <Footer />
     
    </BrowserRouter>
  );
}

export default App;

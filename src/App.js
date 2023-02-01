import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRoutes/>
      </main>
      <Footer />
     
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Home from './Components/Home';
import Pagenotfound from './Components/Pagenotfound';
import Navbar from './Components/Navbar';
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Pagenotfound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

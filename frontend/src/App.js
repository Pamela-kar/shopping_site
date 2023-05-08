import {Route ,Routes} from 'react-router-dom';
import './App.css';
import './styles/global.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';
// import Cart from './pages/cart';
import Profile from './pages/profile';
import Shop from './pages/shop';

function App() {
  return (
   <>
     <NavBar/>
     <main> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/cart" element={<Cart/>} /> */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
     </main>
     <Footer/>
    </>
    
    
  );
}

export default App;

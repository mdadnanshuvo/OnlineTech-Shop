import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/navbar';
import { Shop } from './pages/shop';
import { Cart } from './pages/cart';
import { ShopContextProvider } from './context/shop-context';
import { ProductDetails } from './pages/productDetails';

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
    
     <Router>
     <NavBar/>
     
       <Routes>
       <Route path='/' Component={Shop} />
      <Route path='/cart' Component={Cart} />
      <Route path='/products/:id' Component={ProductDetails} />
       </Routes>
   
      </Router>
      
    </ShopContextProvider>
      
    </div>
  );
}

export default App;

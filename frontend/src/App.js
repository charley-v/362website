
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Sell from './Pages/Sell';
import About from './Pages/About';
import Product from './Pages/Product';
import { Knives } from './Pages/Knives';
import Footer from './Components/Footer/Footer';
import bayonetbanner from './Components/Assets/Banners/bayonetbanner.png';
import bowiebanner from './Components/Assets/Banners/bowieknifebanner.png';
import Signup from './Pages/Signup';
import Profile from './Pages/profile';
import Loginsignup from './Pages/Loginsignup';
import useToken from './useToken';





function App() {
  const {token, removeToken, setToken} = useToken();
  
  return (
    <div>
      <BrowserRouter> 
      <Navbar token={removeToken} />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/knives' element={<Knives/>}/>
        <Route path='/bayonet' element={<ShopCategory banner={bayonetbanner}category = 'bayonet'/>}/>
        <Route path='/bowieknife' element={<ShopCategory banner={bowiebanner}category = 'bowieknife'/>}/>
        <Route path='/butterflyknife' element={<ShopCategory category = 'butterflyknife'/>}/>
        <Route path='/classicknife' element={<ShopCategory category = 'classicknife'/>}/>
        <Route path='/falchionknife' element={<ShopCategory category = 'falchionknife'/>}/>
        <Route path='/flipknife' element={<ShopCategory category = 'flipknife'/>}/>
        <Route path='/gutknife' element={<ShopCategory category = 'gutknife'/>}/>
        <Route path='/huntsmanknife' element={<ShopCategory category = 'huntsmanknife'/>}/>
        <Route path='/karambit' element={<ShopCategory category = 'karambit'/>}/>
        <Route path='/kukriknife' element={<ShopCategory category = 'kukriknife'/>}/>
        <Route path='/m9bayonet' element={<ShopCategory category = 'm9bayonet'/>}/>
        <Route path='/navajaknife' element={<ShopCategory category = 'navajaknife'/>}/>
        <Route path='/nomadknife' element={<ShopCategory category = 'nomadknife'/>}/>
        <Route path='/paracordknife' element={<ShopCategory category = 'paracordknife'/>}/>
        <Route path='/shadowdaggers' element={<ShopCategory category = 'shadowdaggers'/>}/>
        <Route path='/skeletonknife' element={<ShopCategory category = 'skeletonknife'/>}/>
        <Route path='/stilettoknife' element={<ShopCategory category = 'stilettoknife'/>}/>
        <Route path='/survivalknife' element={<ShopCategory category = 'survivalknife'/>}/>
        <Route path='/talonknife' element={<ShopCategory category = 'talonknife'/>}/>
        <Route path='/ursusknife' element={<ShopCategory category = 'ursusknife'/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Signup/>}/>
        

        {!token && token !== "" && token !== undefined ? (
            <Route path='/profile' element={<Loginsignup setToken={setToken} />} />
          ) : (
            <Route path='/profile' element={<Profile token={token} setToken={setToken} />} />
          )}
          <Route path='/login' element={<Loginsignup setToken={setToken} />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

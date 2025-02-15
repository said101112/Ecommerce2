import './index.css'
import './App.css'
import { Navbar } from './components/navbar.jsx'
import { Home } from './components/home.jsx'
import { Women } from './components/women.jsx'
import { Men } from './components/men.jsx'
import { Kids } from './components/kids.jsx'
import { Shop } from './components/shop.jsx'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Login } from './components/login.jsx'
import { CartProvider } from './components/cartprovider.jsx'
import { Cart } from './components/cart.jsx'

const Nav_herite = () => {
  return (
    <>
     
      <Navbar />
      <Outlet />
     
      
    </>
  )
}

function App() {
  return (
    // Englobe toute l'application avec CartProvider
    <CartProvider> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav_herite />}>
            <Route index element={<Home />} />
            <Route path='/shope' element={<Shop />} />
            <Route path='/men' element={<Men />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/women' element={<Women />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

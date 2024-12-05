
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from '../Pages/SignIn.jsx'
import SignUp from '../Pages/SignUp.jsx'
import Product from '../Pages/Product.jsx'
import Profile from '../Pages/Profile.jsx'
import { CartProvider } from './CartContext.jsx'
import Checkout from '../Pages/Checkout.jsx'
import Address from '../Pages/Address.jsx'
import Payment from '../Pages/Payment.jsx'

createRoot(document.getElementById('root')).render(

    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  </CartProvider>
)

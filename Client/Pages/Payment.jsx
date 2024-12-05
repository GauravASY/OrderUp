import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import arrowLeft from '../Assets/arrow-left.png'
import { useNavigate } from 'react-router-dom';
import wallet from '../Assets/wallet.png'
import addressArrow from '../Assets/AddressArrow.png'
import { useCart } from '../src/CartContext';
import orderCheck from '../Assets/OrderCircle.png'

function Payment() {
    const[user, setUser] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {state} = useCart();
    const [paymentDone, setPaymentDone] = useState(false);

    useEffect(()=>{
        getUser();
    },[])

    async function getUser(){
        if(!token){
          navigate("/");
        }
        try {
          const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/profile`, {
            headers:{
              'Authorization' : token
            }
          }) 
          setUser(data.user);
        } catch (error) {
          console.log("error from getUser");
        }
      }

  return (
    <div style={{height:'100vh', display:'flex', flexDirection:'column'}}>
        <Banner/>
        <Navbar user={user}/>
        <div style={{flexGrow:'1'}}>
            {
                !paymentDone ? 
                <div style={{display:'flex', flexDirection:'column', gap:'15px', margin:'40px 80px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                <img src={arrowLeft} style={{height:'35px', width:'35px', objectFit:'cover', cursor:'pointer'}} onClick={()=>navigate("/checkout", {state:{}}) }/>
                <span style={{fontFamily:'Poppins', fontSize:'2rem', fontWeight:'600'}}>Choose and Pay</span>
            </div>
                <div style={{display:'flex', gap:'15px'}}>
                    <div style={{display:'flex', flexDirection:'column', width:'60%', padding:'10px', borderRadius:'1rem'}}>
                        <div style={{display:'flex', alignItems:'center', gap:'15px', borderRadius:'2rem',border:"solid #FFE8CE thin", padding:'8px 10px', cursor:'pointer'}} >
                            <div style={{background:'#FFEDD8', height:'40px', width:'40px',display:'flex',alignItems:'center',justifyContent:'center', borderRadius:'2rem'}}>
                                <img src={wallet} style={{height:'20px', width:'20px', objectFit:'cover'}} />
                            </div>
                            <div style={{display:'flex', flexDirection:'column', flexGrow:'1'}}>
                                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600'}}>Wallet</span>
                                <span style={{fontFamily:'Poppins', fontSize:'0.8rem', fontWeight:'400', color:'grey'}}>Available Balance : &#8377; 300</span>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <img src={addressArrow} style={{height:'15px', width:'15px', objectFit:'cover'}} />
                            </div>
                        </div>
                        <div style={{background:'grey' , maxHeight:'1px', padding:'0px', margin:'12px 0px', color:'white'}}>-</div>
                        {
                            user?.paymentMethods.length > 0 ? 
                            <div>
                                {
                                    user?.paymentMethods.map((method)=> <WalletCard method={method} />)
                                }
                            </div> : <></>
                        }
                        <div style={{display:'flex', alignItems:'center', gap:'15px', borderRadius:'2rem', border:"solid #FFE8CE thin", padding:'8px 10px', marginBottom:'10px', cursor:'pointer'}} onClick={()=> navigate('/profile')}>
                            <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400'}}>+</span>
                            <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400'}}>Add Debit Card</span>
                        </div>
                    </div>
                <div style={{width:'40%',marginTop:'10px', display:'flex', flexDirection:'column', padding:'10px', border:'solid #000000 thin', borderRadius:'0.5rem', height:'fit-content'}}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <span style={{fontFamily:'Poppins', fontSize:'1.1rem', fontWeight:'600', color:'#83858A'}}>Amount to be payed</span>
                        <span style={{fontFamily:'Poppins', fontSize:'1.1rem', fontWeight:'600'}}>&#8377; {state.totalPrice + 10}</span>
                    </div>
                    <div style={{background:'grey' , maxHeight:'1px', padding:'0px', margin:'12px 0px', color:'white'}}>-</div>
                    <button style={{border:"none", borderRadius:'2rem', padding:'10px 10px', fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600', color:'white', background:'#FC8A06', textAlign:'center', cursor:'pointer'}} onClick={()=>setPaymentDone(true)}> Proceed Payment</button>
                </div>
            </div>
        </div>
                :
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <PaymentComplete state={state}/>
                </div>
            }
        </div>
        <Footer/>
    </div>
  )
}

function WalletCard({method}){
    return (
        <div style={{display:'flex', alignItems:'center', gap:'15px', borderRadius:'2rem', border:"solid #FFE8CE thin", padding:'8px 10px', marginBottom:'10px', cursor:'pointer'}} >
            <div style={{background:'#FFEDD8', height:'30px', width:'30px',display:'flex',alignItems:'center',justifyContent:'center', borderRadius:'2rem'}}>
              <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600', color:'#FC8A06'}} >{method.paymentName[0].toUpperCase()}</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', flexGrow:'1'}}>
                    <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600'}}>{method.paymentName}</span>
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
                    <input type='radio' style={{height:'15px', width:'15px'}} />
            </div>
        </div>
    )
}

function PaymentComplete({state}){
    const navigate = useNavigate();

    return (
        <div style={{display:'flex', flexDirection:'column', textAlign:'center', alignItems:'center', gap:'8px', width:'25%', marginBottom:'15px'}}>
            <div style={{position:'relative', width:'fit-content', borderRadius:'5rem', background:'#D9D9D9'}}>
                <img src={orderCheck} style={{height:'100px', width:'100px', objectFit:'cover'}}/>
            </div>
            <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'500', }}>Order Placed Successfully</span>
            <span style={{fontFamily:'Poppins', fontSize:'0.8rem', fontWeight:'400', color:'#83858A'}}>Your order is confirmed and on its way. Get set to savor your chosen delights!</span>
            <div style={{display:'flex', flexDirection:'column', textAlign:'center', alignItems:'center', gap:'6px', padding:'8px 12px', border:'solid #00000080 thin', borderRadius:'0.5rem', width:'70%'}}>
                {
                    state?.items?.map((item)=> <span style={{fontFamily:'Poppins', fontSize:'0.8rem', fontWeight:'400'}}>{item.name}</span>)
                }
                <button style={{border:"none", borderRadius:'2rem', padding:'10px 10px', fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600', color:'white', background:'#FC8A06',width:'100%', textAlign:'center', cursor:'pointer'}} onClick={()=>navigate("/")}>Back to home</button>
            </div>
        </div>
    )
}

export default Payment
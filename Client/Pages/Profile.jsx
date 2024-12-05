import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import arrowLeft from '../Assets/arrow-left.png'
import dp from '../Assets/ProfilePic.png'
import Footer from '../Components/Footer'
import creditCard from '../Assets/credit-card.png'
import edit from '../Assets/edit.png'
import CreditCardBox from '../Components/CreditCardBox';

function Profile() {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const [paymentDetail, setPaymentDetail] = useState({
    cardNumber:"",
    date:"",
    cvc:"",
    name:""
  });
  const [creditBoxVisible, setCreditBoxVisible] = useState(false);

  useEffect(()=>{
    getUser();
  }, [creditBoxVisible, isEditing])

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
      setName(data.user.name);
      setCountry(data.user.country);
      setEmail(data.user.email);
      setGender(data.user.gender);
    } catch (error) {
      console.log("error from getUser");
    }
  }

  async function handleEditing(e){
    if(e.target.innerHTML === 'Edit'){
      setIsEditing(true);
    }
    else{
      try {
          if(email === ""|| name ===""){
            return;
          }
          await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/profile`, {name, email, gender, country}, {
            headers:{
              "Authorization" : token
            }
          })
      } catch (error) {
        console.log("Unexpected error");
      }
      setIsEditing(false);
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'15px', position:'relative'}}>
      <div style={ creditBoxVisible ? {background:'rgba(0, 0, 0, 0.9)', opacity:'90%', zIndex:'2'}: {}}>
      <Banner/>
      <Navbar user={user}/>
      <div style={{display:'flex', flexDirection:'column', gap:'15px', margin:'40px 120px 10px 120px', paddingBottom:'40px',  borderBottom:'solid grey thin'}}>
          <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                <img src={arrowLeft} style={{height:'35px', width:'35px', objectFit:'cover', cursor:'pointer'}}/>
                <span style={{fontFamily:'Poppins', fontSize:'2rem', fontWeight:'600'}}> My Profile</span>
          </div>

          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', }}>
            <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
              <img src={dp} style={{height:'60px', width:'60px', objectFit:'cover'}}/>
              <span style={{fontFamily:'Poppins', fontSize:'1.5rem', fontWeight:'600'}}>{user?.name}</span>
            </div>
            <button style={{color:'white', background:'#FC8A06', padding:'6px 0px',width:'60px',fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400', borderRadius:'0.5rem', border:'none', cursor:'pointer'}} onClick={handleEditing}>{isEditing ? 'Save':'Edit'}</button>
          </div>
          <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', gap:'40px'}}>
            <div style={{display:'flex', flexDirection:'column', gap:'10px', width:'48%'}}>
              <span style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400'}}>Full Name</span>
              <input type="text" value={isEditing ? name : user?.name} disabled={!isEditing} onChange={(e)=> setName(e.target.value)} style={{flexGrow:'1', background:'#F9F9F9', border:'none', fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400', borderRadius:'0.3rem', padding:'8px 16px'}}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'10px', width:'48%'}}>
              <span style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400'}}>Email Address</span>
              <input type="text" value={isEditing ? email : user?.email} disabled={!isEditing} onChange={(e)=> setEmail(e.target.value)} style={{flexGrow:'1', background:'#F9F9F9', border:'none', fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400', borderRadius:'0.3rem', padding:'8px 16px'}}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'10px', width:'48%'}}>
              <span style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400'}}>Gender</span>
              <input type="text" value={isEditing ? gender:user?.gender}  disabled={!isEditing} onChange={(e)=> setGender(e.target.value)} style={{flexGrow:'1', background:'#F9F9F9', border:'none', fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400', borderRadius:'0.3rem', padding:'8px 16px'}}/>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'10px', width:'48%'}}>
              <span style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400'}}>Country</span>
              <input type="text" value={isEditing ? country: user?.country} disabled={!isEditing} onChange={(e)=> setCountry(e.target.value)} style={{flexGrow:'1', background:'#F9F9F9', border:'none', fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400', borderRadius:'0.3rem', padding:'8px 16px'}}/>
            </div>
          </div>
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:'15px', margin:'0px 120px 80px 120px'}}>
          <span style={{fontFamily:'Poppins', fontSize:'2rem', fontWeight:'600'}}>Saved Payment Methods</span>
          <div style={{display:'flex', gap:'15px'}}>
            {
              user?.paymentMethods?.length > 0 ? 
              <div style={{display:'flex', gap:'15px'}}> 
                {
                  user?.paymentMethods?.map((payment)=> <PaymentDetail user={user} payment={payment} setCreditBoxVisible={setCreditBoxVisible} setPaymentDetail={setPaymentDetail} key={payment._id}/>)
                }
              </div> 
              : <></>
            }
            
            <div style={{border:'solid #AFAFAF thin', height:'50px', width:'240px',maxWidth:'fit-content',gap:'10px', borderRadius:'1rem', padding:'4px 10px', display:'flex', alignItems:'center', cursor:'pointer'}} onClick={()=> setCreditBoxVisible(true)}>
                    <span style={{background:'#FFEDD8', height:'40px', width:'40px',display:'flex',alignItems:'center',justifyContent:'center', borderRadius:'2rem', fontSize:'2.4rem', color:'#FC8A06', fontWeight:'600'}}>+</span>
                    <span style={{fontFamily:'Poppins', fontWeight:'400', fontSize:'1.3rem'}}>Add New Card</span>
            </div>
          </div>
      </div>
      <Footer/>
      </div>
      {
        creditBoxVisible ? 
        <div style={{position:'absolute', top:'25vh', left:'25vw', zIndex:'12'}}>
          <CreditCardBox setCreditBoxVisible={setCreditBoxVisible} token={token} detail={paymentDetail} setPaymentDetail={setPaymentDetail}/>
        </div> 
        : <></>
      }
    </div>
  )
}

function PaymentDetail({user, payment, setCreditBoxVisible, setPaymentDetail}){

  function handleCreditCard(){
    setPaymentDetail(payment);
    setCreditBoxVisible(true);
  }
  return (
    <div style={{border:'solid #AFAFAF thin', height:'50px', width:'250px',gap:'10px', borderRadius:'1rem', padding:'4px 10px', display:'flex', alignItems:'center'}}>
            <div style={{background:'#FFEDD8', height:'40px', width:'40px',display:'flex',alignItems:'center',justifyContent:'center', borderRadius:'2rem'}}>
              <img src={creditCard} style={{height:'20px', width:'20px', objectFit:'cover'}} />
            </div>
            
            <div style={{display:'flex', flexDirection:'column', gap:'5px', flexGrow:'1'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1.3rem', fontWeight:'400'}}>xxxx {" "} xxxx {" "} xxxx {" "} {payment.cardNumber.slice(12)}</span>
                <span  style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400', color:'grey'}}>{payment?.name}</span>
            </div>
            <img src={edit} style={{height:'15px', width:'15px', objectFit:'cover', marginLeft:'10px', cursor:'pointer'}} onClick={handleCreditCard}/>
        </div>
  )
}

export default Profile

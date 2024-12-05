import React from 'react'
import { NavLink } from 'react-router-dom'
import bell from '../Assets/Bell.png'
import mobile from '../Assets/mobile.png'
import food from '../Assets/food.png'

function Poster3() {
    const navLinkStyles = ({ isActive , disabled}) => ({
        height: "70%",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        padding: "6px 18px",
        textDecoration: "none",
        fontSize: "0.9rem",
        fontFamily: "Poppins",
        justifyContent: "center",
        color: 'black',
        borderRadius: "4rem",
        fontWeight : isActive && !disabled ? "700" : "400",
        border: isActive && !disabled ? "#FC8A06 solid thin" : "transparent", 
        cursor : disabled ? 'none' : 'pointer',
        transition: "all 0.3s ease-in-out", 
      });

  return (
    <div  style={{margin:'0px 80px 20px 80px', background:'#D9D9D9',padding:'80px 80px' ,height:'70vh', borderRadius:'1rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'14px'}}>
        <div style={{display:'flex', marginBottom:'15px', width:'100%', height:'10%'}}>
            <div style={{width:'40%', fontFamily:"Poppins", fontWeight: '700', fontSize:'1.5rem', display:'flex', alignItems:'center'}}>Know more about us!</div>
            <div style={{flexGrow:'1', display:'flex', justifyContent:'space-around'}}>
                <NavLink style={(props) => navLinkStyles({ ...props, disabled: false })}>Frequent Questions</NavLink>
                <NavLink style={(props) => navLinkStyles({ ...props, disabled: true })}>Who we are?</NavLink>
                <NavLink style={(props) => navLinkStyles({ ...props, disabled: true })}>Partner Programs</NavLink>
                <NavLink style={(props) => navLinkStyles({ ...props, disabled: true })}>Help & Support</NavLink>
            </div>
        </div>

        <div style={{background:'white',borderRadius:'1rem', width:'100%', height:'90%', display:'flex' }}>
            <div style={{width:'40%', display:'flex', flexDirection:'column', padding:'50px 10px', alignItems:'center', gap:'4px'}}>
                    <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1rem', display:'flex', alignItems:'center', background:'#FC8A06', padding:'10px 20px', borderRadius:'2rem'}}>How does Order.UK work?</div>
                    <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1rem', display:'flex', alignItems:'center',  padding:'10px 20px', borderRadius:'2rem', textAlign:'center'}}>What payment methods are accepted?</div>
                    <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1rem', display:'flex', alignItems:'center',  padding:'10px 20px', borderRadius:'2rem', textAlign:'center'}}>Can I track my order in real-time?</div>
                    <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1rem', display:'flex', alignItems:'center',  padding:'10px 20px', borderRadius:'2rem', textAlign:'center'}}>Are there any special discounts or</div>
                    <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1rem', display:'flex', alignItems:'center',  padding:'10px 20px', borderRadius:'2rem', textAlign:'center', marginTop:'-17px'}}>promotions available?</div>
                    <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1rem', display:'flex', alignItems:'center',  padding:'10px 20px', borderRadius:'2rem', textAlign:'center'}}>Is Order.UK available in my area?</div>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'50px 20px 10px 20px', width:'60%', gap:'10px',alignItems:'center'}}>
                <div style={{display:'flex', gap:'10px'}}>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px', background:'#D9D9D9', borderRadius:'1rem', textAlign:'center', padding:'16px 12px', alignItems:'center'}}>
                        <span style={{fontFamily:'Poppins', fontWeight:'700'}}>Place an Order!</span>
                        <img src={bell} alt="" style={{height:'80px', width:'80px', objectFit:'cover'}}/>
                        <span style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'0.9rem' }}>Place order through our website or Mobile app</span>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px', background:'#D9D9D9', borderRadius:'1rem', textAlign:'center', padding:'16px 12px', alignItems:'center'}}>
                        <span style={{fontFamily:'Poppins', fontWeight:'700'}}>Track Progress </span>
                        <img src={food} alt="" style={{height:'80px', width:'80px', objectFit:'cover'}}/>
                        <span style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'0.9rem'}}>Place order through our website or Mobile app</span>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px', background:'#D9D9D9', borderRadius:'1rem', textAlign:'center', padding:'16px 12px', alignItems:'center'}}>
                        <span style={{fontFamily:'Poppins', fontWeight:'700'}}>Get your Order!</span>
                        <img src={mobile} alt="" style={{height:'80px', width:'80px', objectFit:'cover'}}/>
                        <span style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'0.9rem'}}>Place order through our website or Mobile app</span>
                    </div>
                </div>
                <div style={{fontFamily:'Poppins',textAlign:'center',marginTop:'12px',fontWeight:'400', fontSize:'0.9rem', width:'90%'}}>
                Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!
                </div>
            </div>
        </div>
    </div>
  )
}

export default Poster3
import React from 'react'
import orderUK from '../Assets/OrderUKcolor.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../Assets/Male User.png'
import { useMediaQuery } from "react-responsive";

function Navbar({user}) {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const isMobile = useMediaQuery({ maxWidth: 425 });

    const navLinkStyles = ({ isActive , disabled}) => ({
        height: "70%",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        padding: "0px 18px",
        textDecoration: "none",
        fontSize: "0.9rem",
        fontFamily: "Poppins",
        fontWeight: "500",
        justifyContent: "center",
        borderRadius: "4rem",
        color: isActive && !disabled ? "white" : "black", 
        background: isActive && !disabled ? "#FC8A06" : "transparent", 
        cursor : disabled ? 'none' : 'pointer',
        transition: "all 0.3s ease-in-out", 
      });

  return (
    <div style={{display: 'flex', padding: isMobile?'0px':'0px 120px', background:'white', marginTop:'20px', marginBottom:'20px'}}>
        <div style={{width:'30%'}}>
        <img style={{height: "34px", objectFit : 'contain'}} src={orderUK} alt="Company Image" />
        </div>
        <div style={{display : 'flex',flexGrow: '1', alignItems:'center', justifyContent:'space-between'}}>
            <NavLink to="/" style={(props) => navLinkStyles({ ...props, disabled: false })}>Home</NavLink>
            {
                user ? <></> : <NavLink style={(props) => navLinkStyles({ ...props, disabled: true })}>Browse Menu</NavLink>
            } 
            <NavLink to='/' style={(props) => navLinkStyles({ ...props, disabled: true })}>Special Offers</NavLink>
            <NavLink to='/product/6745828236e2ebc3750ac9ee' style={(props) => navLinkStyles({ ...props, disabled: false })}>Restaurant</NavLink>
            <NavLink to='/' style={(props) => navLinkStyles({ ...props, disabled: true })}>TrackOrder</NavLink>
            <div style={{display:'flex', alignItems:'center', height:'100%', background: '#03081F', borderRadius:'4rem', padding:'0px 10px', gap:'3px'}}>
                <img src={userIcon} alt="user Icon" style={{height:'20px', width:'25px'}}/>
                {
                    user ? <NavLink to='/profile' style={{height: "100%", display:'flex', alignItems:'center', width:'fit-content', textDecoration:'none',fontFamily:"Poppins",fontWeight:'500', fontSize:'0.9rem', justifyContent:'center', color: 'white'}}>Hey {user.name}</NavLink> : <NavLink to= '/signin' style={{height: "100%", display:'flex', alignItems:'center', width:'fit-content',fontSize:'0.9rem', textDecoration:'none',fontFamily:"Poppins",fontWeight:'500', justifyContent:'center', color:'white'}}>Login/Signup</NavLink>
                }   
            </div>
        </div>
    </div>
  )
}

export default Navbar
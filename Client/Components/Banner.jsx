import React from 'react'
import star from '../Assets/Star.png'
import pin from '../Assets/Location.png'
import basket from '../Assets/Basket.png'
import downArrow from '../Assets/DownArrow.png'

function Banner({setCartVisible, cartVisible}) {
  return (
    <div style={{display:'flex', margin: '0px 80px 0px 80px', background:'#FAFAFA', borderBottomLeftRadius:'0.8rem', borderBottomRightRadius:'0.8rem'}}>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center' , width:'80%'}}>
            <div style={{display: 'flex', width: '40%', alignItems:'center'}}>
                <img src={star} alt="star emoji" style={{height:'15px', width:'15px', marginRight:'12px'}}/>
                <span style={{fontFamily: "Poppins", fontSize:'0.8rem', fontWeight:'600'}}> Get 5% Off your first order, <span style={{fontFamily:"Poppins", fontWeight:"600", color:"#FC8A06"}}>Promo: ORDER5</span></span>
            </div>
            <div style={{width:'40%', display:'flex', alignItems:'center'}}>
                    <img src={pin} alt="Pin location icon" style={{height:'15px', width:'15px', marginRight:'12px'}}/>
                    <span style={{fontFamily:"Poppins",fontSize:'0.8rem', fontWeight:'500'}}>Regent Street,{" "}<span style={{textDecoration:'underline'}}>A4</span>, A4201, London{" "}<span style={{ fontWeight:"500", color:"#FC8A06", marginLeft:'4px', textDecoration:'underline', textDecorationColor:'#FC8A06'}}>change location</span></span>
            </div>
        </div>
        <div style={{width:'20%', height:'45px',background:'#028643', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottomLeftRadius:'0.8rem', borderBottomRightRadius:'0.8rem', padding:'0px 12px'}} onClick={()=> setCartVisible(!cartVisible)}>
            <div style={{display:'flex', alignItems:'center'}}>
                <img src={basket} alt="cart icon" style={{height:'28px', width:'28px', marginRight:'6px'}}/>
                <span style={{fontFamily:"Poppins", fontSize:'0.9rem', fontWeight:'600', color:'white'}}>My cart</span>
            </div>
            <img src={downArrow} alt="down arrow icon" style={{height:'28px', width:'28px', marginRight:'6px'}}/>
        </div>
    </div>
  )
}

export default Banner
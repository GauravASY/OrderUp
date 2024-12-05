import React from 'react'
import { useNavigate } from 'react-router-dom'

function RestaurantTile({image, name, id}) {
  const navigate = useNavigate();

  return (
    <div style={{display:'flex', flexDirection:'column', height: "175px", width:'165px', cursor:'pointer'}} onClick={()=> navigate(`/product/${id}`)}>
        <img src={image} alt="dish image" style={{height:'128px', width:'165px', objectFit:'cover', borderTopLeftRadius:'0.8rem', borderTopRightRadius:'0.8rem'}}/>
        <div style={{display:'flex', height:'45px', flexDirection:'column', borderBottomLeftRadius:'0.8rem', borderBottomRightRadius:'0.8rem', background:'#FC8A06',color:'white', padding:'6px 14px',alignItems:'center', justifyContent:'center'}}>
            <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'700'}}>{name}</span>
        </div>
    </div>
  )
}

export default RestaurantTile
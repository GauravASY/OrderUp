import React from 'react'
import image from '../Assets/SignPic.png'

function CategoryTile({image, name}) {
  return (
    <div style={{display:'flex', flexDirection:'column', height: "180px", width:'170px'}}>
        <img src={image} alt="dish image" style={{height:'130px', width:'170px', objectFit:'cover', borderTopLeftRadius:'0.8rem', borderTopRightRadius:'0.8rem'}}/>
        <div style={{display:'flex', flexDirection:'column', borderBottomLeftRadius:'0.8rem', borderBottomRightRadius:'0.8rem', background:'#F5F5F5', padding:'6px 14px'}}>
            <span style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'700'}}>{name}</span>
            <span style={{fontFamily:'Poppins', fontSize:'0.7rem', fontWeight:'400', color: '#FC8A06'}}>21 restaurants</span>
        </div>
    </div>
  )
}

export default CategoryTile
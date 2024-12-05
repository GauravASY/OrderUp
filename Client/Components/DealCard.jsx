import React from 'react'
import plus from '../Assets/Plus.png'


function DealCard({discount, image, restaurant, description}) {
 
  return (
    <div style={{position:'relative', minWidth:'390px', height:'240px', borderRadius:'0.8rem', background: `linear-gradient(to top right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 
        url(${image}) center/cover no-repeat`}}>
        
        <div style={{position:'absolute', top:'0px', right:'1vw', background:'#03081F', borderBottomLeftRadius:'1rem', borderBottomRightRadius:'1rem', color:'white', padding:'15px', fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem'}}>
            {`-${discount}%`}
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:'4px', position:'absolute', bottom:'4vh', left:'2.3vw'}}>
            <span style={{ fontFamily:'Poppins', fontWeight:'400', fontSize:'1rem', color:'#FC8A06'}}>{restaurant}</span>
            <span style={{ fontFamily:'Poppins', fontWeight:'600', fontSize:'1.5rem', color:'white'}}>{description}</span>
        </div>
        <div style={{position:'absolute', display:'flex', justifyContent:'center', alignItems:'center', background:'white', bottom:'0px', right:'0px', width:'20%', height:'30%', opacity:'90%', borderTopLeftRadius:'40px'}}>
                <img src={plus} alt="add" style={{height:'40px', width:'40px', objectFit:'cover'}}/>
        </div>
    </div>
  )
}

export default DealCard
import React from 'react'


function DiscountCard({discount, image, restaurant}) {
  return (
    <div style={{position:'relative', minWidth:'351px', height:'220px', borderRadius:'0.8rem', background: `linear-gradient(to top right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 
        url(${image}) center/cover no-repeat`}}>
        
        <div style={{position:'absolute', top:'0px', right:'1vw', background:'#03081F', borderBottomLeftRadius:'1rem', borderBottomRightRadius:'1rem', color:'white', padding:'15px', fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem'}}>
            {`-${discount}%`}
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:'4px', position:'absolute', bottom:'4vh', left:'2.3vw'}}>
            <span style={{ fontFamily:'Poppins', fontWeight:'400', fontSize:'1rem', color:'#FC8A06'}}>Restaurant</span>
            <span style={{ fontFamily:'Poppins', fontWeight:'600', fontSize:'1.5rem', color:'white'}}>{restaurant}</span>
        </div>
    </div>
  )
}

export default DiscountCard
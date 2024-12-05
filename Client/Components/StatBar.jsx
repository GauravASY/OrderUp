import React from 'react'

function StatBar() {
  return (
    <div style={{ margin:'0px 80px 20px 80px', gap:'12px', background:'#FC8A06', color: 'white', borderRadius:'0.8rem', padding:'18px 18px'}}>
        <div style={{display:'flex'}}>
          <div style={{display:'flex', flexDirection:'column', textAlign:'center', borderRight:"white solid thin", width:'25%'}}>
            <span style={{fontFamily:"Poppins", fontWeight: '300', fontSize:'3rem'}}>546+</span>
            <span  style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1.2rem'}}>Registered Riders</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', textAlign:'center', borderRight:"white solid thin", width:'25%'}}>
            <span style={{fontFamily:"Poppins", fontWeight: '300', fontSize:'3rem'}}>789,900+</span>
            <span  style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1.2rem'}}>Orders Delivered</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', textAlign:'center', borderRight:"white solid thin", width:'25%'}}>
            <span style={{fontFamily:"Poppins", fontWeight: '300', fontSize:'3rem'}}>690+</span>
            <span  style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1.2rem'}}> Restaurants Partnered</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', textAlign:'center', width:'25%'}}>
            <span style={{fontFamily:"Poppins", fontWeight: '300', fontSize:'3rem'}}>17,457+</span>
            <span  style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1.2rem'}}>Food items</span>
          </div>
        </div>
      </div>
  )
}

export default StatBar
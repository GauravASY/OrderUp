import React from 'react'

function PromoCard({image, poptext, subheading, heading}) {
  return (
    <div style={{position:'relative', width:'50%', height:'340px', borderRadius:'0.8rem', background: `linear-gradient(to top right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), 
        url(${image}) center/cover no-repeat`}}>
        
        <div style={{position:'absolute', top:'0px', left:'4vw', background:'white', borderBottomLeftRadius:'1rem', borderBottomRightRadius:'1rem', color:'black', padding:'15px', fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem'}}>
           {poptext}
        </div>
        <div style={{display:'flex', flexDirection:'column', position:'absolute', bottom:'6vh', left:'5vw'}}>
            <span style={{ fontFamily:'Poppins', fontWeight:'400', fontSize:'1rem', color:'#FC8A06'}}>{subheading}</span>
            <span style={{ fontFamily:'Poppins', fontWeight:'600', fontSize:'1.8rem', color:'white', marginBottom : '10px'}}>{heading}</span>
            <button style={{background: "#FC8A06", width: "65%", padding: "10px 0px 10px 0px",border: "none", boxShadow:"none", color: "white", fontFamily: "Poppins", fontSize: "0.8rem", fontWeight: "500", borderRadius: "4rem"}}>Get started</button>
        </div>
    </div>
  )
}

export default PromoCard
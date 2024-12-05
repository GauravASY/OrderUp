import React from 'react'
import star from '../Assets/ReviewStar.png'
import clock from '../Assets/clock.png'
import dp from '../Assets/DP.png'

function ReviewCard({content}) {
  return (
    <div style={{display:'flex', flexDirection:'column', padding:'24px 18px', minWidth:'310px', height:'140px', borderRadius:'0.5rem', background:'white'}}>
        <div style={{display:'flex', justifyContent:'space-between', height:'20%', marginBottom:'30px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
                <img src={dp} alt="" style={{height:'38px', width:'38px',objectFit:'contain', borderRadius:'100%', background:'grey'}}/>
                <div style={{height:'100%', fontWeight:'700', color:'#FC8A06', fontSize:'3rem', marginTop:'-8px', display:'flex', alignItems:'center'}}>|</div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <span style={{fontFamily:'Poppins', fontSize:'1.1rem', fontWeight:'600'}}>{content.customerName.split(" ")[0]}</span>
                    <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400', color:"#FC8A06"}}>South london</span>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'end'}}>
                <div style={{display:'flex', gap:'4px', width:'fit-content'}}>
                        {
                        Array.from({ length: content.rating }).map((index) => (
                            <img src={star} style={{height:'18px'}} key={index}/>
                          ))
                        }                  
                </div>
                <div style={{width:'100%', display:'flex', alignItems:'center', gap:'6px'}}>
                    <img src={clock} alt="" style={{height:'18px'}}/>
                    <span style={{fontFamily:'Poppins', fontSize:'0.8rem', fontWeight:'400'}}>{content.date}</span>
                </div>
            </div>
        </div>
        <div style={{flexGrow:'1', fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400'}}>
        {content.review}
        </div>
    </div>
  )
}

export default ReviewCard
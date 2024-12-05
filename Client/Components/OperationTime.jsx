import React from 'react'
import pin from '../Assets/Tracking.png'
import verifiedImg from '../Assets/ID Verified.png'
import clock from '../Assets/ClockOperation.png'

function OperationTime({currRestaurant}) {
  return (
    <div  style={{margin:'0px 80px 40px 80px', background:'#FBFBFB', height:'70vh', position:'relative', borderRadius:'0.9rem', display:'flex', overflow:'hidden', boxShadow:'5px 5px 5px rgba(0, 0, 0, 0.3)'}}>
        <div style={{display:'flex', flexDirection:'column', width:'33%',fontFamily:'Poppins', background:'white', color:'black', padding:'60px 30px', gap:'15px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
              <img src={pin} style={{height:'34px' , width:'34px' , objectFit:'cover'}} />
              <h2>Delivery information</h2>
            </div>
            <span style={{fontSize:'1rem'}}><b>Monday</b>: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Tuesday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Wednesday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Thursday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Friday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Saturday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Sunday</b>: 8:00 AM–12:00 AM</span>
            <span><b>Estimated time until delivery</b>: 20 min</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', width:'33%',fontFamily:'Poppins', background:'white', color:'black', padding:'60px 30px', gap:'15px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
              <img src={verifiedImg} style={{height:'34px' , width:'34px' , objectFit:'cover'}} />
              <h2>Contact Information</h2>
            </div>
            <span>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</span>
            <span style={{fontSize:'1rem'}}><b>Phone number</b></span>
            <span style={{fontSize:'1.4rem'}}>+{currRestaurant?.contact}</span>
            <span style={{fontSize:'1rem'}}><b>Website</b></span>
            <span style={{fontSize:'1.4rem'}}>{currRestaurant?.website}</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', width:'33%',fontFamily:'Poppins', background:'#03081F', color:'white', padding:'60px 30px', gap:'15px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
              <img src={clock} style={{height:'34px' , width:'34px' , objectFit:'cover'}} />
              <h2>Operational Times</h2>
            </div>
            <span style={{fontSize:'1rem'}}><b>Monday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Tuesday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Wednesday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Thursday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Friday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Saturday</b>: 8:00 AM–3:00 AM</span>
            <span style={{fontSize:'1rem'}}><b>Sunday</b>: 8:00 AM–3:00 AM</span>
        </div>
    </div>
  )
}

export default OperationTime
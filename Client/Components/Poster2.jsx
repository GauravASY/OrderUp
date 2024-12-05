import React from 'react'
import orderUK from '../Assets/OrderUKcolor.png'
import GooglePlay from '../Assets/googleStore.png'
import FriendLaugh from '../Assets/friendsLaughing.png'

function Poster2() {
  return (
    <div style={{margin:'0px 80px 20px 80px', background:'#E0E1DC', height:'70vh', position:'relative', borderRadius:'1rem', display:'flex', flexDirection:'column', alignItems:'end', justifyContent:'center'}}>
      <div style={{display:'flex', flexDirection:'column',alignItems:'center', marginRight:'60px', gap:'10px'}}>
        <div style={{display:'flex', alignItems:'center', marginLeft:'160px'}}>
          <img src={orderUK} alt="" style={{height: "38px", objectFit : 'contain'}}/>
          <span style={{fontFamily: "Poppins", fontSize:'3.5rem', fontWeight:'600'}}>ing is more</span>
        </div>
        <div style={{background:'#03081F', display:'flex', padding:'0px 30px 0px 200px',marginLeft:'18px', borderRadius:'3rem'}}>
            <span style={{fontFamily: "Poppins", fontSize:'2.5rem', fontWeight:'600', color:'#FC8A06', textDecoration:'underline'}}>Personalized {" "}</span>
            <span style={{fontFamily: "Poppins", fontSize:'2.5rem', fontWeight:'600', color:'white'}}>& Instant</span>
        </div>
        <span style={{fontFamily: "Poppins", fontSize:'1.2rem', fontWeight:'400', marginLeft:'230px'}}>Download the Order.uk app for faster ordering</span>
        <img style={{height: "40px", objectFit : 'contain', marginLeft:'170px'}} src={GooglePlay} alt="Google Play Image" />
      </div>
      <img src={FriendLaugh} alt="Friends Laughing Image" style={{height:'110%', position:'absolute', bottom:'0px', left:'20px', zIndex:'1'}}/>
      <img src={FriendLaugh} alt="Friends Laughing Image" style={{height:'110%', position:'absolute', bottom:'5px', left:'5px', opacity:'0.2', filter:'grayscale(60%)'}}/>
    </div>
  )
}

export default Poster2
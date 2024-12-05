import React from 'react'
import orderComplete from '../Assets/OrderCompleted.png'
import bike from '../Assets/bike.png'
import prodImage from '../Assets/ProductPosterImage.png'
import rating from '../Assets/RatingImg.png'
import clock from '../Assets/ClockWhite.png'

function ProductPoster({currRestaurant}) {
  return (
    <div style={{margin:'0px 80px 40px 80px', background:'#FBFBFB', height:'50vh', position:'relative', borderRadius:'0.8rem', display:"flex",  background: `linear-gradient(rgba(3, 8, 31, 0.9), rgba(3, 8, 31, 0.9)), 
        url(${prodImage})`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <div style={{width:'60%', display:'flex', flexDirection:"column", justifyContent:'end', gap:'10px', padding:'30px 30px 60px 30px', color:'white', fontFamily:'Poppins'}}>
            <span style={{fontSize:'0.7rem', fontWeight:'400'}}>I'm lovin' it!</span>
            <span  style={{fontSize:'2.5rem', fontWeight:'600'}}>{currRestaurant.name+ " "} East London</span>
            <div style={{display:'flex', gap:'20px'}}>
                <div style={{display:'flex', gap:'10px', alignItems:'center', width:'fit-content', padding:'10px 20px', border:'white solid thin', borderRadius:'2rem'}}>
                    <img src={orderComplete} style={{height:'20px', width:'20px'}} />
                    <span  style={{fontSize:'1rem', fontWeight:'600'}}>Minimum Order: 12 GBP</span>
                </div>
                <div style={{display:'flex', gap:'10px', alignItems:'center', width:'fit-content', padding:'10px 20px', border:'white solid thin', borderRadius:'2rem'}}>
                    <img src={bike} style={{height:'20px', width:'20px'}} />
                    <span  style={{fontSize:'1rem', fontWeight:'600'}}>Delivery in 20-25 Minutes</span>
                </div>
            </div>
        </div>
        <div style={{width:'40%', padding:'30px', position:'relative'}}>
            <img src={prodImage} style={{height:'100%', width:'100%',objectFit:'cover', borderRadius:'1rem'}} />
            <img src={rating} style={{height:'85px', width:'70px', borderRadius:'0.8rem', position:'absolute', bottom:'25px', left:'-6px'}} />
        </div>
        <div style={{background:'#FC8A06', display:'flex',gap:'15px', alignItems:'center', borderTopRightRadius:'0.5rem', borderBottomRightRadius:'0.5rem', padding:'8px 28px', position:'absolute',left:'0px', bottom:'-18px'}}>
            <img src={clock} style={{height:'15px', width:'15px'}} />
            <span style={{color:'white', fontFamily:'Poppins', fontWeight:'600', fontSize:'0.8rem'}}>Open until 3:00 AM</span>
        </div>
    </div>
  )
}

export default ProductPoster
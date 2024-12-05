import React from 'react'
import text1 from '../Assets/notification_1.png'
import pizza from '../Assets/PizzaGirl.png'
import noodle from '../Assets/NoodleGirl.png'
import num from '../Assets/1.png'
import num2 from '../Assets/2.png'
import num3 from '../Assets/3.png'

function HomePoster() {
  return (
    <div style={{margin:'0px 80px 40px 80px', background:'#FBFBFB', height:'70vh', position:'relative', borderRadius:'1rem'}}>
        <div style={{display:'flex', flexDirection:'column', position:'absolute', left:'2vw', top:'15vh'}}>
            <span style={{fontFamily: "Poppins", fontSize:'1rem', fontWeight:'400', marginBottom:'2px'}}>Order Restaurant food, takeaway and groceries.</span>
            <span style={{fontFamily: "Poppins", fontSize:'3.5rem', fontWeight:'600'}}>Feast Your Senses,</span>
            <span style={{fontFamily: "Poppins", fontSize:'3.5rem', fontWeight:'600', marginBottom:'12px', marginTop:'-10px', color:'#FC8A06'}}>Fast and Fresh</span>
            <span style={{fontFamily: "Poppins", fontSize:'0.8rem', fontWeight:'400', marginBottom:'4px'}}>Enter a postcode to see what we deliver</span>
            <div style={{position:'relative',width:'70%', display:'flex', alignItems:'center'}}>
                <input type="text" placeholder='e.g. EC4R 3TE' style={{background:"white", width:"100%", padding: "10px 0px 10px 24px", border: "grey solid thin", boxShadow:"none", borderRadius:"4rem", fontFamily: "Poppins", color: 'grey', fontSize: "0.8rem", fontWeight:"400"}}/>
                <button style={{background: "#FC8A06", width: "35%", padding: "10px 0px 10px 0px",border: "none", boxShadow:"none", color: "white", fontFamily: "Poppins", fontSize: "0.8rem", fontWeight: "500", borderRadius: "4rem" , zIndex: "1" , position: "absolute", right: "0px"}}>Search</button>
            </div>
        </div>
        <div style={{background:'#FC8A06', height:"90%", width:'40%', position:'absolute', bottom:'0px', right:'0px', borderTopLeftRadius:'20rem', borderBottomRightRadius:'1rem'}}></div>
        <img src={pizza} alt="image1" style={{position:'absolute', bottom:'0px', right:'25vw', height:'80%', zIndex:'1'}} />
        <img src={noodle} alt="image2" style={{position:'absolute', bottom:'0px', right:'20vw', height:'68%'}}/>
        <img src={text1} alt="image3" style={{position:'absolute', bottom:'4vh', right:'8vw', height:'20%'}}/>
        <img src={text1} alt="image3" style={{position:'absolute', bottom:'22vh', right:'4vw', height:'20%'}} />
        <img src={text1} alt="image3" style={{position:'absolute', bottom:'40vh', right:'10vw', height:'20%'}} />
        <img src={num} alt="1" style={{position:'absolute', bottom:'52vh', right:'12vw', height:'8%'}}/>
        <img src={num2} alt="1" style={{position:'absolute', bottom:'34vh', right:'6vw', height:'8%'}}/>
        <img src={num3} alt="1" style={{position:'absolute', bottom:'16vh', right:'10vw', height:'8%'}}/>
    </div>
  )
}

export default HomePoster
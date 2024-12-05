import React, { useState } from 'react'
import axios from 'axios'

function CreditCardBox({detail, setCreditBoxVisible,setPaymentDetail, token}) {
    const [cardNumber, setCardNumber] =useState(detail.cardNumber);
    const [name, setName] = useState(detail.name);
    const [date, setDate] = useState(detail.date);
    const [cvc, setCvc] = useState(detail.cvc);


    async function handleSave(){
        if(cardNumber === ""|| date === "" || cvc === "" || name === ""){
            setCreditBoxVisible(false);
            setPaymentDetail({cardNumber:"", name:"", cvc:"", date:""});
            return;
        }
        try {
            if(detail._id === undefined){
                await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/paymentMethod`,{cardNumber, name, date, cvc}, {
                    headers:{
                        "Authorization" : token
                    }
                })
            }
            else{
               const{data} = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/paymentMethod`,{cardNumber, name, date, cvc, payid:detail._id}, {
                    headers:{
                        "Authorization" : token
                    }
                })
                console.log(data.msg);
            }
        } catch (error) {
            console.log("Unexpected error");
        }
        setPaymentDetail({cardNumber:"", name:"", cvc:"", date:""});
        setCreditBoxVisible(false);
    } 

    function handleCancel(){
        setPaymentDetail({cardNumber:"", name:"", cvc:"", date:""});
        setCreditBoxVisible(false);
    }

  return (
    <div style={{display:'flex', flexDirection:'column', borderRadius:'0.5rem', height:'60vh', width:'50vw', boxShadow:"0px 10px 8px #00000040", overflow:'hidden'}}>
        <div style={{display:'flex', flexDirection:'column',height:'90%', padding:'20px', gap:'15px', background:'white'}}>
            <span style={{fontFamily:'Poppins', fontSize:'2.3rem', fontWeight:'600'}}>Edit Payment Method</span>
            <div style={{display:'flex', alignItems:'center', gap:'15px',fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600'}}>
                <div style={{width:'19%', padding:"8px 0px"}}>Card Number</div>
                <input  type="text" placeholder='XXXX XXXX XXXX 1234' value={ cardNumber} onChange={(e)=> setCardNumber(e.target.value)} style={{flexGrow:'1', padding:"8px 14px", border:'none', fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600', border:'solid #AFAFAF thin', borderRadius:'0.5rem'}}/>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'15px',fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600'}}>
                <div style={{width:'19%', padding:"8px 0px"}}>Expiration</div>
                <input  type="text" placeholder='XX/XX' value={date || ``} onChange={(e)=> setDate(e.target.value)} style={{flexGrow:'1', padding:"8px 14px", border:'none', fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600', border:'solid #AFAFAF thin', borderRadius:'0.5rem'}}/>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'15px',fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600'}}>
                <div style={{width:'19%', padding:"8px 0px"}}>CVC</div>
                <input  type="text" placeholder='XXX' value={cvc||""} onChange={(e)=> setCvc(e.target.value)} style={{flexGrow:'1', padding:"8px 14px", border:'none', fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600', border:'solid #AFAFAF thin', borderRadius:'0.5rem'}}/>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'15px',fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600'}}>
                <div style={{width:'19%', padding:"8px 0px"}}>Name on card</div>
                <input  type="text" placeholder='John Doe' value={name || ""} onChange={(e)=> setName(e.target.value)} style={{flexGrow:'1', padding:"8px 14px", border:'none', fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600', border:'solid #AFAFAF thin', borderRadius:'0.5rem'}}/>
            </div>
        </div>
        <div style={{background:'#FC8A06', display:'flex', alignItems:'center', padding:"20px", justifyContent:'space-between', height:'10%', borderBottomRightRadius:'0.5rem', borderBottomLeftRadius:'0.5rem'}}>
            <button style={{fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600', background:'#663700',color:'white', padding:'12px 18px', border:'none', borderRadius:"0.5rem"}}>Remove</button>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600', color:'white', cursor:"pointer"}} onClick={handleCancel}>Cancel</span>
                <button style={{fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600', background:'#FFFFFF', padding:'12px 18px', border:'none', borderRadius:"0.5rem"}} onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    </div>
  )
}

export default CreditCardBox
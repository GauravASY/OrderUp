import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import arrowLeft from '../Assets/arrow-left.png'
import locationpin from '../Assets/AddressPin.png'
import axios from 'axios'

function Address() {
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [boxVisible, setBoxVisible] = useState(false);
    const [user, setUser] = useState(null);
    const [mainaddress, setMainAddress] = useState("");


    useEffect(()=>{
        getUser();
    }, [boxVisible])

    async function getUser(){
        if(!token){
          navigate("/signin");
        }
        try {
          const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/profile`, {
            headers:{
              'Authorization' : token
            }
          }) 
          setUser(data.user);
        } catch (error) {
          console.log("error from getUser");
        }
      }

  return (
    <div style={ boxVisible? {display:'flex', flexDirection:'column', position:'relative', background:'#000000', opacity:'90%'}: {display:'flex', flexDirection:'column', position:'relative'}}>
        <Banner/>
        <Navbar user={location.state.user}/>
        <div style={{flexGrow:'1'}}> 
        <div style={{margin:"40px 80px"}}>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                <img src={arrowLeft} style={{height:'35px', width:'35px', objectFit:'cover', cursor:'pointer'}} onClick={()=>navigate("/checkout", {state : { from: "Address", data: mainaddress}})}/>
                <span style={{fontFamily:'Poppins', fontSize:'2rem', fontWeight:'600'}}> Your Addresses</span>
            </div>  
        </div>
        <div style={{margin:"40px 80px", gap:'20px', display:'flex', flexWrap:'wrap'}}>
            <div style={{border:'dotted #AFAFAF thin', height:'140px', width:'180px', borderRadius:'1rem', padding:'10px', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={()=> setBoxVisible(true)}>
                    <span style={{background:'#FFEDD8', height:'50px', width:'50px',display:'flex',alignItems:'center',justifyContent:'center', borderRadius:'2rem', fontSize:'2.4rem', color:'#FC8A06', fontWeight:'600'}}>+</span>
                    <span style={{fontFamily:'Poppins', fontWeight:'400', fontSize:'1.4rem'}}>Add Address</span>
            </div>
            {
                user?.address.length > 0 ? 
                ( user.address.map((address)=> <AddressTile user={user} address={address} setMainAddress={setMainAddress} mainaddress={mainaddress}/>)) 
                : <></>
            }
        </div>
        </div>
        {
            boxVisible ? <div style={{position:'absolute', top:'20vh', left:'20vw', zIndex:'1'}}><AddressBox setBoxVisible={setBoxVisible} token={token}/></div> : <></>
        }
        <Footer/>
    </div>
  )
}

function AddressTile({user, address, setMainAddress, mainaddress}){

    function handleMainAddress(e){
        setMainAddress(address._id);
    }

    return(
        <div style={{border:'solid #AFAFAF thin', height:'140px', width:'190px', borderRadius:'1rem', padding:'10px', display:'flex', flexDirection:'column', justifyContent:'space-between'}} onClick={(e)=>handleMainAddress(e)}>
            <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontFamily:'Poppins', fontWeight:'600', fontSize:'1.2rem'}}>
                    <span>{user.name}</span>
                    {
                        mainaddress === address._id ? <span style={{background:'#FFEDD8', padding:'3px 8px', fontWeight:'400', fontSize:'0.8rem', color:'#FC8A06', borderRadius:'2rem'}}>Default</span>: <></>
                    }
                </div>
                <div style={{textWrap:'wrap', fontFamily:'Poppins', fontWeight:'400', fontSize:'1rem'}}>
                    {address.fulladdress}
                </div>
                <div style={{fontFamily:'Poppins', fontWeight:'400', fontSize:'1rem'}}>
                    Phone-Number : {address.phone}
                </div>
            </div>
            <div style={{display:'flex', gap:'6px', color:'#FC8A06', alignItems:'center'}}>
                <span style={{fontFamily:'Poppins', fontWeight:'400', color:'#FC8A06', fontSize:'1rem'}} >Edit</span> 
                    /
                <span style={{fontFamily:'Poppins', fontWeight:'400', color:'#FC8A06', fontSize:'1rem'}}>Remove</span>
            </div>
        </div>
    )
}

function AddressBox({setBoxVisible, token}){
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");
    const [fulladdress, setFullAddress] = useState("");

    async function handleClick(){
        if(state === ""|| city === "" || pincode === ""||phone === ""||fulladdress=== ""){
            setBoxVisible(false);
            return;
        }
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/address`,{state, city, pincode, phone, fulladdress},{
                headers: {
                    "Authorization" : token
                }
            })
            if(data.success){
                console.log(data.user);
            }
            else{
                console.log(data.msg);
            }

        } catch (error) {
            console.log("error while updating address");
        }
        setBoxVisible(false);
    }
    return (
        <div style={{display:'flex', flexDirection:'column', background:'white', borderRadius:'0.5rem', height:'50vh', width:'60vw', padding:'10px', gap:'15px'}}>
            <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
                <img src={locationpin} style={{height:'20px', width:'20px', objectFit:'cover'}} />
                <span style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'1.1rem'}}>Add Address</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <input type="text" placeholder='State' style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem', color:'#7E7E7E', borderRadius:'0.5rem', padding:'6px 6px', border:'solid #C5C5C580 thin'}} value={state} onChange={(e)=> setState(e.target.value)}/>
                <input type="text" placeholder='City/District' style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem', color:'#7E7E7E', borderRadius:'0.5rem', padding:'6px 6px', border:'solid #C5C5C580 thin'}} value={city} onChange={(e)=> setCity(e.target.value)}/>
                <input type="text" placeholder='Pincode' style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem', color:'#7E7E7E', borderRadius:'0.5rem', padding:'6px 6px', border:'solid #C5C5C580 thin'}} value={pincode} onChange={(e)=> setPincode(e.target.value)}/>
                <input type="text" placeholder='Phone-Number' style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem', color:'#7E7E7E', borderRadius:'0.5rem', padding:'6px 6px', border:'solid #C5C5C580 thin'}} value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            </div>
            <textarea placeholder='Enter full address' style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem', padding:'10px', flexGrow:'1', border:'solid #C5C5C580 thin'}} value={fulladdress} onChange={(e)=> setFullAddress(e.target.value)}/>
            <div style={{display:'flex', justifyContent:'end', alignItems:'center'}}>
                <button style={{background:'#FC8A06', padding:'8px 40px',border:'none', color:'white', fontFamily:'Poppins', fontWeight:'500', fontSize:'1rem', borderRadius:'0.5rem', cursor:'pointer'}} onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

export default Address
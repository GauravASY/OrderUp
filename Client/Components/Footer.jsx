import OrderUk from '../Assets/OrderUK.png'
import GooglePlay from '../Assets/googleStore.png'
import fb from '../Assets/Facebook.png'
import insta from '../Assets/Instagram.png'
import tiktok from '../Assets/TikTok.png'
import snap from '../Assets/Snapchat.png'
import { useMediaQuery } from 'react-responsive'

function Footer() {
const isDesktop = useMediaQuery({ minWidth: 768 });
const isMobile = useMediaQuery({ maxWidth: 425 });
  return (
    <div style={{display : "flex", flexDirection: "column", height: isMobile? "fit-content": '30vh'}}>
        <div style={{display: "flex", flexGrow: '1', background: "#D9D9D9", padding:'6px 0px',flexDirection: isMobile? "column" : ""}}>

            <div style={{width: isMobile? "" :"33%", display: 'flex', flexDirection: "column", gap:isMobile?"15px" : "9px", padding: isMobile?"10px 20px" :"10px 0px 10px 80px", textAlign: isMobile?"center":"", alignItems: isMobile? "center":""}}>
                <div style={{width : "fit-content", height: "fit-content"}}>
                <img style={{height: "34px", objectFit : 'contain'}} src={OrderUk} alt="Company Image" />
                </div>
                <div style={{width : "fit-content", height: "fit-content"}}>
                <img style={{height: isMobile?"40px":"26px", objectFit : 'contain'}} src={GooglePlay} alt="Google Play Image" />
                </div>
                <p style={{color : "#000000", fontFamily: "Poppins", fontSize:'0.9rem', fontWeight:"420", width: "70%"}}>Company # 490039-445, Registered with House of companies.</p>   
            </div>

            <div style={{width: isMobile? "" :"33%", display: 'flex', flexDirection: "column", padding: isMobile? "8px 20px":"8px 0px 8px 0px", textAlign:isMobile? "center":""}}>
                <div style={{fontFamily: "Poppins", color: "#03081F", fontSize:"1rem", fontWeight: "700", padding : "3px 0px 3px 0px", marginBottom: "6px"}}>Get Exclusive Deals in your Inbox</div>
                <div style={{display: 'flex', position : "relative"}}>
                    <input type="text" placeholder='youremail@gmail.com' style={{background:"#d4cfcf", width:"100%", padding: "7px 0px 7px 24px", border: "none", boxShadow:"none", borderRadius:"4rem", fontFamily: "Poppins", color: 'grey', fontSize: "0.8rem", fontWeight:"400"}} />
                    <button style={{background: "#FC8A06", width: "35%", padding: "7px 0px 7px 0px",border: "none", boxShadow:"none", color: "white", fontFamily: "Poppins", fontSize: "0.8rem", fontWeight: "500", borderRadius: "4rem" , zIndex: "1" , position: "absolute", right: "0px"}}>Subscribe</button>
                </div>
                <p style={{fontFamily: "Poppins", fontSize: "0.6rem", fontWeight: "400", paddingLeft: "24px", paddingTop : "8px"}}>we wont spam, read our email policy</p>
                <div style={{display: 'flex', gap:'12px', marginTop: "10px", paddingLeft: "24px", justifyContent: isMobile? "center":"", gap: isMobile? "20px": "" }}>
                    <img src={fb} alt="" style={{height : "30px", width : "30px"}} />
                    <img src={insta} alt="" style={{height : "30px", width : "30px"}} />
                    <img src={tiktok} alt="" style={{height : "30px", width : "30px"}} />
                    <img src={snap} alt="" style={{height : "30px", width : "30px"}} />
                </div>
            </div>

            <div style={{width: isMobile? "" :"33%", display: 'flex', flexDirection:isMobile?"column":"",  padding: "8px 24px 8px 28px", gap: isMobile? "15px":""}}>
                <div style={{display : 'flex', flexDirection: "column", width: "50%"}}>
                    <p style={{fontFamily: "Poppins", color: "#03081F", fontSize:"1rem", fontWeight: "700", padding : "6px 0px 6px 0px"}}>Legal Pages</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "0.8rem",color:"black", textDecoration:"underline", fontWeight:"450", padding : "3px 0px 3px 0px"}}>Terms and conditions</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "0.8rem",color:"black", textDecoration:"underline", fontWeight:"450", padding : "3px 0px 3px 0px"}}>Privacy</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "0.8rem",color:"black", textDecoration:"underline", fontWeight:"450", padding : "3px 0px 3px 0px"}}>Cookies</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "0.8rem",color:"black", textDecoration:"underline", fontWeight:"450", padding : "3px 0px 3px 0px"}}>Modern Slavery Statement</p>
                </div>
                <div style={{display : 'flex', flexDirection: "column", width:"50%"}}>
                    <p style={{fontFamily: "Poppins", color: "#03081F", fontSize:"1rem", fontWeight: "700", padding : "6px 0px 6px 0px"}}>Important Links</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "0.8rem",color:"black", textDecoration:"underline", fontWeight:"450", padding : "3px 0px 3px 0px"}}>Get help</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "0.8rem",color:"black", textDecoration:"underline", fontWeight:"450", padding : "3px 0px 3px 0px"}}>Add your restaurant</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "0.8rem",color:"black", textDecoration:"underline", fontWeight:"450", padding : "3px 0px 3px 0px"}}>Sign Up to deliver</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "0.8rem",color:"black", textDecoration:"underline", fontWeight:"450", padding : "3px 0px 3px 0px"}}>Create a business account</p>
                </div>
            </div>
        </div>

        <div style={{display: "flex", justifyContent: isMobile? "center":"space-between", justifyItems: "center",background: "#03081F", padding : isMobile? "8px 0px":"8px 80px", fontSize:"0.8rem"}}>
            <div style={{color: "#FFFFFF", fontFamily: "Poppins"}}>Order.uk Copyright 2024, All Rights Reserved.</div>
            <div style={{display:isMobile? "none": "flex", justifyContent: "space-around", justifyItems: "center", gap: "40px", }}>
                <p style={{color: "#FFFFFF", fontFamily: "Poppins"}}> Privacy Policy</p>
                <p style={{color: "#FFFFFF", fontFamily: "Poppins"}}>Terms</p>
                <p style={{color: "#FFFFFF", fontFamily: "Poppins"}}>Pricing</p>
                <p style={{color: "#FFFFFF", fontFamily: "Poppins"}}>Do not sell or share my personal information</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
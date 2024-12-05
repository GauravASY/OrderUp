import React, {useState, useEffect} from 'react'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import RestaurantTile from '../Components/RestaurantTile'
import axios from 'axios'
import arrowLeft from '../Assets/arrow-left.png'
import { useCart } from '../src/CartContext'
import pin from '../Assets/AddressPin.png'
import addressArrow from '../Assets/AddressArrow.png'
import { useNavigate, useLocation } from 'react-router-dom'

function Checkout() {
    const [restaurants, setRestaurants] = useState([]);
    const[user, setUser] = useState(null);
    const token = localStorage.getItem('token');
    const {state} = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    

    useEffect(()=>{
        getUser();
      }, [])

    useEffect(()=>{
        getAllRestaurant();
      },[])

    async function getAllRestaurant(){
        try {
          const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/restaurant/`);
          if(!data.success){
            console.log(data.msg);
          }
          else{
            setRestaurants(data.restaurants);
          }
        } catch (error) {
          
        }
      }

      async function getUser(){
        if(!token){
          navigate("/");
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

      function handleAddress(){
        navigate("/address", {state:{user: user}});
      }
      
      function handleArrowLeftClick(){ 
        if(location.state.id !== undefined){
            navigate( `/product/${location.state.id }`)
        }
        else{
            navigate(`/`);
        }
      }

  return (
    <div >
        <Banner/>
        <Navbar user={user}/>
       
        <div style={{display:'flex', flexDirection:'column', gap:'15px', margin:'40px 80px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                <img src={arrowLeft} style={{height:'35px', width:'35px', objectFit:'cover', cursor:'pointer'}} onClick={()=> handleArrowLeftClick()}/>
                <span style={{fontFamily:'Poppins', fontSize:'2rem', fontWeight:'600'}}> Your Order Details</span>
            </div>
            <div style={{display:'flex'}}>
                <div style={{display:'flex', flexDirection:'column', width:'60%', padding:'10px', border:"solid #03081F thin", borderRadius:'1rem'}}>
                {
                    state.items.map((item)=> <ItemDetail key={item.id} item={item}/>)
                }
                <label style={{fontFamily:'Poppins', fontSize:'0.8rem', fontWeight:'400', color:'grey'}}>Notes</label>
                <input style={{border:"solid grey thin", borderRadius:'2rem', padding:'10px 10px', fontFamily:'Poppins', fontSize:'0.8rem'}} placeholder="Add order notes"/>
                </div>


                <div style={{display:'flex', flexDirection:'column', width:'40%', padding:"0px 15px"}}>
                        <div style={{display:'flex', alignItems:'center', gap:'15px', borderRadius:'2rem', border:'solid grey thin', padding:'8px 10px', cursor:'pointer'}} onClick={handleAddress}>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'6px', background:'white', borderRadius:'2rem', border:'solid grey thin'}}>
                                <img src={pin} style={{height:'20px', width:'20px', objectFit:'cover'}} />
                            </div>
                            <div style={{display:'flex', flexDirection:'column', flexGrow:'1'}}>
                                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600'}}>Delivery Address</span>
                                <span style={{fontFamily:'Poppins', fontSize:'0.8rem', fontWeight:'400', color:'grey'}}>{
                                  user?.address?.filter((address)=> address._id === location.state.data )[0]?.fulladdress || "Not Specified"}</span>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <img src={addressArrow} style={{height:'15px', width:'15px', objectFit:'cover'}} />
                            </div>
                        </div>
                        <div style={{background:'grey' , maxHeight:'1px', padding:'0px', marginTop:'18px'}}>-</div>

                        <div style={{display:'flex', flexDirection:'column', gap:"8px", padding:'12px 0px'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400', color:'#83858A'}}>Items</span>
                                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600', color:'#83858A'}}>&#8377;{" "}{state.totalPrice}</span>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400', color:'#83858A'}}>Sales tax</span>
                                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600', color:'#83858A'}}>&#8377;{" "}10</span>
                            </div>
                        </div>
                        <div style={{background:'grey' , maxHeight:'1px', padding:'0px'}}>-</div>
                        <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0px'}}>
                                <span style={{fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'400',color:'#83858A'}}>Subtotal{' ('}{state.totalQuantity}{" "}items{" )"}</span>
                                <span style={{fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600'}}>&#8377;{" "}{state.totalPrice + 10}</span>
                        </div>
                        <button style={{border:"none", borderRadius:'2rem', padding:'10px 10px', fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600', color:'white', background:'#FC8A06', textAlign:'center', marginTop:'18px', cursor:'pointer'}} onClick={()=>navigate("/payment")}>Choose Payment Method</button>
                </div>
            </div>
        </div>

        <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1.5rem', margin:'20px 80px'}}>
        Similar Restaurants
      </div>
      {
        restaurants ? 
        <div style={{display:'flex', margin:'0px 80px 80px 80px', gap:'12px', borderRadius:'0.8rem', justifyContent:"space-between"}}>{
          restaurants.map((restaurant) => (<RestaurantTile name={restaurant.name} image = {restaurant.image} key={restaurant._id} id={restaurant._id}/>))
        }
        </div> : <></>
      }
        <Footer/>
    </div>
  )
}


function ItemDetail({item}){

    return(
        <div style={{display:'flex', alignItems:'center', gap:'15px', borderBottom: "solid #202938 thin", padding:'10px 0px'}}>
            <img src={item.image} style={{height:'45px', width:'45px', objectFit:'covers', borderRadius:'0.8rem'}} />
            <div style={{display:'flex', flexDirection:'column', gap:'5px', flexGrow:'1'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600'}}>{item.name}</span>
                <span  style={{fontFamily:'Poppins', fontSize:'0.8rem', fontWeight:'400', color:'grey'}}>{item.quantity}x{" "}items</span>
            </div>
            <span  style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'600', color:'#028643'}}>&#8377;{" "}{item.price}</span>
        </div>
    )
}

export default Checkout
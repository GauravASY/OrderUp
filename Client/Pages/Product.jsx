import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import RestaurantTile from '../Components/RestaurantTile'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductPoster from '../Components/ProductPoster'
import FilterBar from '../Components/FilterBar'
import search from '../Assets/Search.png'
import ReviewCard from '../Components/ReviewCard'
import rating from '../Assets/RatingImg.png'
import OperationTime from '../Components/OperationTime'
import Map from '../Components/Map'
import DealCard from '../Components/DealCard'
import Card from '../Components/Card'
import Cart from '../Components/Cart'
import share from '../Assets/share.png'

function Product() {
  const {id} = useParams();
  const navigate = useNavigate();
  const[currRestaurant, setCurrRestaurant] = useState({});
  const [searchFilter, setSearchFilter] = useState(" ");
  const [menu, setMenu] = useState([]);
  const [deals, setDeals] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const[user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(()=>{
    getUser();
  }, [])

  useEffect(()=>{
    getDeals();
  }, [id])
  
  useEffect(()=>{
    getRestaurant();
  }, [id])

  useEffect(()=>{
    getAllRestaurant();
  },[])

  useEffect(()=>{
    getMenu();
  }, [id] )

  async function getMenu(){
   try {
        const {data} =  await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/restaurant/category/${id}`, {
          headers: {
            "Authorization" : token
          }
        });
        if(data.success){
          setMenu(data.menu);
        }
        else{
          console.log("data.success is false");
        }
   } catch (error) {
        console.log("Inside Catch of getMenu function");
   }
  }

  async function getDeals(){
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/restaurant/deals`);
      setDeals(data.deals);
    } catch (error) {
      console.log("error in getDeals catch");
    }
  }

  async function getRestaurant(){
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/restaurant/${id}`, {
        headers:{
          "Authorization" : token
        }
      });
      if(!data.success){
        console.log(data.msg);
      }
      else{
        setCurrRestaurant(data.restaurant);
      }
    } catch (error) {
      
    }
}
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
    <div>
      <Banner setCartVisible={setCartVisible} cartVisible={cartVisible}/>
      <Navbar user={user}/>
      <ProductPoster currRestaurant={currRestaurant}/>
      <div style={{display:'flex', margin:'20px 80px', padding:'0px 40px', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'start', fontFamily:'Poppins', fontWeight:'700', fontSize:'1.5rem'}}>All Offers from {currRestaurant?.name} East London</div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'end',width:'25%', position:'relative'}}>
          <input type="text" placeholder='Search from menu...' style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'600', height:'100%',width:'100%' ,padding:'4px 35px', borderRadius:'2rem', border:'grey solid thin'}} value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)}/>
          <img src={search} style={{height:'20px', width:'20px', position:'absolute',left:'10px'}} />
        </div>
      </div>
      <FilterBar/>

      <div style={!cartVisible ? { display: 'flex', overflow:'hidden'} : {display:'flex'}}>

        <div style={cartVisible ? {width:'75%'}:{minWidth:'100%'}}>
              <div style={ cartVisible ? {display:'flex', gap:'15px', margin:'40px 80px', flexWrap:'wrap'}:{display:'flex', gap:'15px', margin:'40px 80px', overflow:'hidden'}}>
              {
                deals.filter((deal)=> deal.restaurant === currRestaurant?.name).map((deal)=>(<DealCard discount={deal.discount} image={deal.image} restaurant={deal.restaurant} description={deal.description} key={deal._id} id={deal._id}/>))
              }
              </div>

              {
  searchFilter && searchFilter !== "" ? (
    menu.filter((category) => category.name === searchFilter).map((category) => (
      <div style={{ margin: '80px 80px' }} key={category.name}>
        <div style={{ fontFamily: "Poppins", fontWeight: "700", fontSize: "2.5rem", marginBottom: '30px' }}>
          {category.name}
        </div>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
          {category.dishes.map((dish) => (
            <Card key={dish._id} dish={dish} />
          ))}
        </div>
      </div>
    ))
  ) : (
    
    menu.map((category) => (
      <div style={{ margin: '80px 80px' }} key={category.name}>
        <div style={{ fontFamily: "Poppins", fontWeight: "700", fontSize: "2.5rem", marginBottom: '30px' }}>
          {category.name}
        </div>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
          {category.dishes.map((dish) => (
            <Card key={dish._id} dish={dish} />
          ))}
        </div>
      </div>
    ))
  )
}

        </div>
          <div style={cartVisible ? {width:'25%', margin:'40px', display:'flex', flexDirection:'column', gap:'15px'}:{}}>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', background:'#FC8A06', padding:'20px 0px', borderRadius:'0.5rem', width:'320px'}}>
              <div style={{display:'flex', alignItems:'center', width:'60%', gap:'8px'}}>
                <img src={share} style={{height:'45px', width:'45px', objectFit:'cover'}}/>
                <span style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'0.9rem', color:'white', textWrap:'wrap'}}>share this cart with your friends</span>
              </div>
              <button style={{background:'white', color:'#FC8A06', fontFamily:'Poppins', fontSize:'0.7rem', padding:'6px 10px', borderRadius:'2rem', border:'none'}}>Copy Link</button>
            </div>
            <Cart id={id}/>
          </div>
      </div>
      
      <OperationTime currRestaurant={currRestaurant || null}/>
      <Map currRestaurant={currRestaurant}/>

      <div style={{height:"50vh", background:'#D9D9D9', position:'relative', padding:'40px 80px'}}>
        <div style={{fontFamily:'Poppins', fontWeight:'700', fontSize:'2.5rem', marginBottom:'20px'}}>
          Customer Reviews
        </div>
        <img src={rating} style={{height:'85px', width:'70px', borderRadius:'0.8rem', position:'absolute', bottom:'-40px', left:'47vw'}} />
        {
          currRestaurant?.customerReviews?.length > 0?
          <div style={{display:'flex', gap:'15px', overflowX:'scroll'}}>
            {
              currRestaurant.customerReviews.map((review)=> <ReviewCard key={review._id} content={review}/>)
            }
          </div> : <></>
        }
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

export default Product
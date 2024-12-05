import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import CategoryTile from '../Components/CategoryTile'
import RestaurantTile from '../Components/RestaurantTile'
import HomePoster from '../Components/HomePoster'
import DiscountCard from '../Components/DiscountCard'
import PromoCard from '../Components/PromoCard'
import Poster2 from '../Components/Poster2'
import Poster3 from '../Components/Poster3'
import Scooter from '../Assets/PromoScooter.png'
import cook from '../Assets/Promo1.png'
import StatBar from '../Components/StatBar'
import { useMediaQuery } from "react-responsive";


function App() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const[user, setUser] = useState(null);
  const token = localStorage.getItem('token');
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [deals, setDeals] = useState([]);
  const [selected, setSelected] = useState('1');
  const [filterWord, setFilterWord] = useState('Vegan');

  useEffect(()=>{
    getUser();
  }, [])

  useEffect(()=>{
    getDeals();
  }, [])

  useEffect(()=>{
    getCategory();
  }, [])

  useEffect(()=>{
    getRestaurant();
  }, [])

  async function getUser(){
    if(!token){
      return;
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

  async function getCategory(){
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/restaurant/categories`);
        setCategories(data.categories);
      } catch (error) {
        
      }
  }

  async function getRestaurant(){
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

  async function getDeals(){
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/restaurant/deals`);
      setDeals(data.deals);
    } catch (error) {
      console.log("error in getDeals catch");
    }
  }

  async function handleFilterButtonClick(e, value){
    setSelected(value) 
    setFilterWord(e.target.textContent)
  }


  return (
    <div className='Main'>
      <Banner/> 
      <Navbar user={user}/>
      <HomePoster/>
      <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1.5rem', margin:'20px 80px', display:'flex', alignItems:'center'}}>
        <span>Up to -100% 🎊 Order.uk exclusive deals</span>
        <div style={{display:'flex', gap:'40px', alignItems:'center', justifyContent:'end', flexGrow:'1'}}>
          <button className={`button ${selected === '1' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '1')} >Vegan</button>
          <button className={`button ${selected === '2' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '2')} >Sushi</button>
          <button className={`button ${selected === '3' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '3')} >Pizza & Fast Food</button>
          <button className={`button ${selected === '4' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '4')} >Others</button>
        </div>
      </div>
      {
        deals ? 
        <div style={{display:'flex', margin:'0px 80px 40px 80px', gap:'12px', overflowX:'scroll', borderRadius:'0.8rem'}}>{
          deals.filter((deal)=> deal.categoryName === filterWord).map((deal) => (<DiscountCard restaurant={deal.restaurant} image = {deal.image} key={deal._id} discount={deal.discount}/>))
        }
        </div> : <></>
      }
      <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1.5rem', margin:'20px 80px'}}>
          Order.uk Popular Categories 🤩
      </div>
      {
        categories ? 
        <div style={{display:'flex', margin:'0px 80px 40px 80px', gap:'12px', overflowX:'scroll', borderRadius:'0.8rem'}}>{
          categories.map((category) => (<CategoryTile name={category.name} image = {category.image} key={category._id}/>))
        }
        </div> : <></>
      }
      <div style={{fontFamily:"Poppins", fontWeight: '700', fontSize:'1.5rem', margin:'20px 80px'}}>
        Popular Restaurants
      </div>
      {
        restaurants ? 
        <div style={{display:'flex', margin:'0px 80px 80px 80px', gap:'12px', borderRadius:'0.8rem', justifyContent:"space-between"}}>{
          restaurants.map((restaurant) => (<RestaurantTile name={restaurant.name} image = {restaurant.image} key={restaurant._id} id={restaurant._id}/>))
        }
        </div> : <></>
      }
      <Poster2/>
      <div style={{display:'flex', margin:'40px 80px 40px 80px', gap:'18px'}}>
        <PromoCard image={cook} poptext={"Earn more with lower fees"} subheading={"Sign up as a business"} heading={"Partner with us"}/>
        <PromoCard image={Scooter} poptext={"Avail exclusive perks"} subheading={"Signup as a rider"} heading={"Ride with us"}/>
      </div>
      <Poster3/>
      <StatBar/>
      <Footer/>
    </div>
  )
}

export default App

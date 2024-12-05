import React from 'react'
import plus from '../Assets/Plus.png'
import { useCart } from '../src/CartContext'

function Card({dish}) {
  const {dispatch} = useCart();

  function handleAddtoCart(e){
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: dish._id,
        name: dish.name,
        price: dish.price,
        image : dish.image,
        quantity: 1, 
      },
    });
  }

  return (
    <div style={{display:'flex', padding:'16px 18px', width:'350px', height:'150px', borderRadius:'0.8rem', boxShadow:'0px 6px 20px rgba(0, 0, 0, 0.3)'}}>
        <div style={{display:'flex', flexDirection:'column', width:'55%',padding :'14px 10px 14px 0px', justifyContent:'space-between'}}>
            <p style={{fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600'}}>{dish.name}</p>
            <p style={{fontFamily:'Poppins', fontSize:'0.9rem', fontWeight:'400'}}>{dish.description.slice(0, 80) + `...`}</p>
            <span style={{fontFamily:'Poppins', fontSize:'1.2rem', fontWeight:'600'}}> &#8377; {dish.price}</span>
        </div>
        <div style={{position:'relative', width:'45%'}}>
            <img src={dish.image} alt="dish pic" style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.8rem'}}/>
            <div style={{position:'absolute', display:'flex', justifyContent:'center', alignItems:'center', background:'white', bottom:'0px', right:'0px', width:'45%', height:'45%', opacity:'90%', borderTopLeftRadius:'40px'}} onClick={(e)=> handleAddtoCart(e)}>
                <img src={plus} alt="add" style={{height:'45px', width:'45px', objectFit:'cover'}}/>
            </div>
        </div>
    </div>

  )
}

export default Card
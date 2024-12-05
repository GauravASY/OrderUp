import React from 'react'
import remove from '../Assets/Remove.png'
import basket from '../Assets/Basket.png'
import { useCart } from '../src/CartContext'
import downArrow from '../Assets/DownGreyButton.png'
import rightArrow from '../Assets/ForwardGreenButton.png'
import checkOutArrow from '../Assets/DownArrow.png'
import scooter from '../Assets/DeliveryScooter.png'
import store from '../Assets/NewStore.png'
import { useNavigate } from 'react-router-dom'

function Cart({id}) {
    const {state} = useCart();
    const navigate = useNavigate();
    

  return (
    <div style={{display:'flex', flexDirection:'column', width:'320px', borderTopLeftRadius:'1rem', borderTopRightRadius:'0.7rem', overflow:'hidden', background:'#F9F9F9'}}>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', background:'#028643', padding:'20px 0px'}}>
            <img src={basket} style={{height:'55px', width:'55px', objectFit:'cover'}}/>
            <span style={{fontFamily:'Poppins', fontWeight:'600', fontSize:'2.5rem', color:'white'}}>My Basket</span>
        </div>
        {
            state.items.length > 0 ? 
            <div >
                {
                state.items.map((item) => (<CartItem key={item.id} item={item}/>))
                }
            </div> : 
            <></>
        }
        <div style={{display:'flex', flexDirection:'column',  padding:'15px 15px', borderBottom:'solid #0000001C thin'}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1.5rem', fontWeight:'600'}}>Sub Total:</span>
                <span style={{fontFamily:'Poppins', fontSize:'1.5rem'}}>&#8377;{" "}{state.totalPrice}.00</span>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1.5rem', fontWeight:'600'}}>Discounts</span>
                <span style={{fontFamily:'Poppins', fontSize:'1.5rem'}}>-{" "} &#8377; 3.00</span>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1.5rem', fontWeight:'600'}}>Delivery Fee</span>
                <span style={{fontFamily:'Poppins', fontSize:'1.5rem'}}>&#8377; 3.00 </span>
            </div>
        </div>

        <div style={{display:'flex', flexDirection:'column',  padding:'20px 15px', borderBottom:'solid #0000001C thin', gap:'14px'}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', background:'#FC8A06CC', padding:'10px 6px', borderRadius:'0.7rem'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1.5rem', fontWeight:'600', color:'white', marginLeft:'8px'}}>Total to pay</span>
                <span style={{fontFamily:'Poppins', fontSize:'2.2rem', fontWeight:'600', color:'white'}}>&#8377;{" "}{state.totalPrice}.00</span>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 10px', borderRadius:'2rem', border:'solid #0000001C thin'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400', marginLeft:'12px'}}>Choose your free item..</span>
                <img src={downArrow} style={{height:'28px', width:'28px', objectFit:'cover'}} />
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 10px', borderRadius:'2rem', border:'solid #0000001C thin'}}>
                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400', marginLeft:'12px'}}>Apply Coupon Code here</span>
                <img src={rightArrow} style={{height:'28px', width:'28px', objectFit:'cover'}} />
            </div>
        </div>

        <div style={{display:'flex', padding:'20px 15px', borderBottom:'solid #0000001C thin', gap:'4px', justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection:'column', padding:'16px 16px', textAlign:'center', alignItems:'center', background:'#EEEEEE', borderRadius:'1rem', border:'solid #00000033 thin'}}>
                <img src={scooter} style={{height:'35px', width:'35px', objectFit:'cover'}} />
                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600'}}>Delivery</span>
                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400'}}>Starts at 17:50</span>
            </div>
            <span style={{fontFamily:'Poppins', fontSize:'0.8rem', fontWeight:'400', background:'#0000001C', color:'#0000001C'}}>|</span>
            <div style={{display:'flex', flexDirection:'column', padding:'16px 16px', textAlign:'center', alignItems:'center', borderRadius:'1rem'}}>
                <img src={store} style={{height:'35px', width:'35px', objectFit:'cover'}} />
                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'600'}}>Collection</span>
                <span style={{fontFamily:'Poppins', fontSize:'1rem', fontWeight:'400'}}>Starts at 16:50</span>
            </div>
        </div>
        <div style={{padding:'0px 15px 15px 15px', cursor:'pointer'}} onClick={()=>navigate('/checkout', {state:{id : id}})}>
            <div style={{display:'flex', alignItems:'center', background:'#028643', padding:'15px 12px', borderRadius:'0.7rem', textAlign:'center'}}>
                    <img src={checkOutArrow} style={{height:'28px', width:'28px', objectFit:'cover', rotate:'-90deg'}} />
                    <div style={{fontFamily:'Poppins', fontSize:'1.8rem', fontWeight:'600', color:'white', marginLeft:'8px', flexGrow:'1'}}>Checkout!</div>
            </div>
        </div>
       
    </div>
  )
}


function CartItem({item}){
    const {state, dispatch} = useCart();

    function handleRemoveFromCart(){
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
              id: item.id,
              name: item.name,
              price: item.price,
              image:item.image,
              quantity: 1, 
            },
          });
    }
    return (
        <div style={{display:'flex',alignItems:'center', padding:'25px 15px', borderBottom:'solid #0000001C thin'}}> 
            <div style={{width:'10%', alignItems:'center', justifyContent:'center', display:'flex', height:'35px', width:'35px'}}>
                <div style={{color:'white', fontFamily:'Poppins', fontWeight:'700', fontSize:'1.7rem', background:'#FC8A06',display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'2rem', height:'100%', width:'100%'}}>{`${item.quantity}x`}</div>
            </div>
            <div style={{flexGrow:'1', fontFamily:'Poopins', fontWeight:'600', fontSize:'1.2rem', display:'flex', flexDirection:'column', marginLeft:'20px', gap:'4px'}}>
                <span style={{color:'#028643', fontSize:'1.4rem', fontWeight:'700'}}>  &#8377;{` ` + item.price}</span>
                <span>{item.name}</span>
            </div>
            <div style={{width:'10%', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}} onClick={handleRemoveFromCart}>
                <img src={remove} style={{width:'32px', height:'32px', objectFit:'cover'}} />
            </div>
        </div>
    )
}

export default Cart
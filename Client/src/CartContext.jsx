import React, { createContext, useReducer, useContext, useEffect } from 'react';

const initialState =()=>  {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : {items: [],
    totalQuantity: 0,
    totalPrice: 0,
  }};
  


const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const updatedItems = [...state.items];

      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        updatedItems.push(action.payload);
      }

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity + action.payload.quantity,
        totalPrice: state.totalPrice + action.payload.price * action.payload.quantity,
      };

    case 'REMOVE_FROM_CART':
      const existingItemIndexRemove = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndexRemove === -1) {
        return state;
    }

    const currItems = [...state.items];

    if (currItems[existingItemIndexRemove].quantity > 1) {
        currItems[existingItemIndexRemove].quantity -= action.payload.quantity;
    } else {
        currItems.splice(existingItemIndexRemove, 1); 
    }

      return {
        ...state,
        items: currItems,
        totalQuantity: state.totalQuantity - action.payload.quantity,
        totalPrice: state.totalPrice - action.payload.price * action.payload.quantity,
      };

    default:
      return state;
  }
};

const CartContext = createContext();


export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer,[], initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

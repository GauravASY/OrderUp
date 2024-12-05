import React, {useState} from 'react'
import '../src/ProductPage.css'

function FilterBar() {
    const [selected, setSelected] = useState('1');
    const [filterWord, setFilterWord] = useState("Offers");

    async function handleFilterButtonClick(e, value){
        setSelected(value) 
        setFilterWord(e.target.textContent)
      }
  return (
    <div style={{display:'flex', padding:'10px 80px', background:'#FC8A06', justifyContent:'space-between'}}>
            <button className={`button ${selected === '1' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '1')}>Offers</button>
            <button className={`button ${selected === '2' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '2')}>Burgers</button>
            <button className={`button ${selected === '3' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '3')}>Fries</button>
            <button className={`button ${selected === '4' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '4')}>Snacks</button>
            <button className={`button ${selected === '5' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '5')}>Salads</button>
            <button className={`button ${selected === '6' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '6')}>Cold Drinks</button>
            <button className={`button ${selected === '7' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '7')}>Happy Meals</button>
            <button className={`button ${selected === '8' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '8')}>Desserts</button>
            <button className={`button ${selected === '9' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '9')}>Hot Drinks</button>
            <button className={`button ${selected === '10' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '10')}>Sauces</button>
            <button className={`button ${selected === '11' ? 'selected' : ''}`} onClick={(e)=> handleFilterButtonClick(e, '11')}>Orbit</button>
      </div>
  )
}

export default FilterBar
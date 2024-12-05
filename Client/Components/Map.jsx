import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import iconimg from '../Assets/MarkerLocation.png'

function Map({currRestaurant}) {

    const marker ={
        geocode : [37.138900, -84.097090],
        popup : currRestaurant.name
    }

    const customIcon = new Icon({
        iconUrl: iconimg,
        iconSize : [38, 38]
    })

  return (
    <div style={{margin:'0px 80px 40px 80px', height:'70vh', borderRadius:'0.9rem', boxShadow:'5px 5px 5px rgba(0, 0, 0, 0.3)', overflow:'hidden', position:'relative'}}>
        <MapContainer center={[37.138900, -84.097090]} zoom={13} style={{ width:'100%', height:'100%'}}>
            <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker position={marker.geocode} icon={customIcon}>
                <Popup>{currRestaurant.name}</Popup>
            </Marker>
        </MapContainer>
        <div style={{display:'flex', flexDirection:'column', width:'20%',fontFamily:'Poppins', background:'#03081F', opacity:'90%', color:'white', padding:'60px 30px', gap:'20px', position:'absolute', bottom:'50px', left:'80px', zIndex:'1000', borderRadius:'1rem'}}>
            <h2>{currRestaurant.name}</h2>
            <span style={{color:'#FC8A06', marginTop:'-10px'}}>South London</span>
            <span style={{fontSize:'0.9rem', color:'white'}}>{currRestaurant.address}</span>
            <span style={{fontSize:'0.9rem'}}><b>Phone number</b></span>
            <span style={{fontSize:'1.2rem', color:'#FC8A06',  marginTop:'-10px'}}>+{currRestaurant?.contact}</span>
            <span style={{fontSize:'0.9rem'}}><b>Website</b></span>
            <span style={{fontSize:'1.2rem', color:'#FC8A06',  marginTop:'-10px'}}>{currRestaurant?.website}</span>
        </div>
    </div>
  )
}

function customIconCom(){
    return (
        <div style={{height:'fit-content', width:'fit-content', padding:'2px', background:'black'}}>
            <img src={iconimg} style={{height:'38px', width:'38px', objectFit:'cover'}} />
        </div>
    )
}

export default Map
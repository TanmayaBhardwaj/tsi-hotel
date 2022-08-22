import React from 'react'
import './galleryy.css'
import NavvBar from '../tsi/NavvBar';

const img1="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg";
const img2="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
const img3="https://thumbs.dreamstime.com/b/hotel-room-22008848.jpg";
const img4="https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg";
const img5="https://loveincorporated.blob.core.windows.net/contentimages/gallery/dbeb3be8-2a3f-48b0-86fb-168010585fe7-Atlantis_Palm_underwatersuite.jpg";
const img6="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/03/trump-hotel-chicago-illinois-usa.jpg"
const img7="https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc="
const img8="https://securecdn.pymnts.com/wp-content/uploads/2016/05/Hotel-Room-Secondary-Market.jpg"
const img9="https://res.cloudinary.com/simplotel/image/upload/x_0,y_60,w_1500,h_844,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/ananta-udaipur/Deluxe_rooms_at_ananta_udaipur_best_rooms_in_udaipur_lmhsol_bozjcf"

const Gallery = () => {
    let data=[
        {
            id:1,
            imgSrc:img1,
        },
        {
            id:2,
            imgSrc:img2,
        },
        {
            id:3,
            imgSrc:img3,
        },
        {
            id:4,
            imgSrc:img4,
        },
        {
            id:5,
            imgSrc:img5,
        },
        {
            id:6,
            imgSrc:img6,
        },
        {
            id:7,
            imgSrc:img7,
        },
        {
            id:8,
            imgSrc:img8,
        },
        {
            id:9,
            imgSrc:img9,
        }
    ]
   
  return (
    <>
      <nav id="navbar">
            <div class="container">
                <h1 class="logo"><a href="/back"><span class="text-warning">TSI</span> HOTEL</a></h1>
                <ul>
                    <li ><a class="current" href="/room" style={{font:"5px"}}>Room</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/extra">Explore</a></li>
                </ul>
            </div>
        </nav>
        
    <div className='gallery' style={{marginTop:"20px",marginBottom:"20px"}}>
        {data.map((item,index)=>{
            return(
                <div className='pics' key={index} >
                    <img src={item.imgSrc} alt="imgs" style={{
                        width:"100%",borderRadius:"20px",border:"2px solid black"
                    }}/>
                    
                </div>
            )
        })}
    </div>
    </>
  )
}
export default Gallery;
import React from 'react'
import "../styles/typesRoom.css"
const Luxury=()=> {
  return (
   <>
   <nav id="navbar" style={{border:"1px solid black",marginBottom:"px"}}>
            <div class="container">
                <h1 class="logo"><a href="/back"><span class="text-warning">TSI</span> HOTEL</a></h1>
                <ul >
                    <li ><a class="/back" href="/back" style={{font:"5px"}}>Home</a></li>
                    <li><a href="/enquiry">Booking</a></li>
                    <li><a href="/contact">Contact</a></li>
                   
                </ul>

            </div>
        </nav>
    <img src="https://cdn.tatlerasia.com/asiatatler/i/hk/2021/07/07033138-most-expensive-hotel-rooms-suites-in-the-world-hotel-martinez1-copy_cover_960x540.jpg" class="img-fluid" style={{width:"2000px",height:"auto"}} alt="Responsive image"/>
    {/* <img src="https://cdn.tatlerasia.com/asiatatler/i/hk/2021/07/07033138-most-expensive-hotel-rooms-suites-in-the-world-hotel-martinez1-copy_cover_960x540.jpg" class="img-fluid" alt="Responsive image"/> */}
    <div class="position-relative">
        <h1 class="dinning-heading display-3">Luxury Rooms</h1>
    </div>

    <div class="dinning-text">
        <p>They provide the luxury of living in the heart of the city without compromising on the views, services, calmness and tranquillity that you look for in an ideal hotel. Their hotels feature luxury spa treatments, restaurants and bars, fitness centres and range of well-designed rooms and suites.</p>
    </div>
    <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://www.montcalm.co.uk/blog/wp-content/uploads/2018/04/the-montcalm-london-marble-arch-12.jpg" class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Complimentary services</h5>
                <p class="card-text">Suites and special room occupants should be given complimentary access to the fitness centre, spa, salon, pools and other exclusive features of the hotel.</p>
                {/* <p class="card-text">
                    <small class="text-muted">
                        <b>Hours</b>
                        <br/>Breakfast/ Lunch / Dinner
                        <br/>7:00 AM – 10:30 AM / 12:30 PM – 3:00 PM / 7:00 PM – 11:00 PM
                    </small>
                </p> */}
            </div>
            </div>
        </div>
    </div>
    <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://www.montcalm.co.uk/blog/wp-content/uploads/2018/04/Toiletries-and-bath-linen.jpg" class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Additional Services</h5>
                <p class="card-text">Suites and high-end rooms should be well furnished and decorated with no cheap fixtures.<br/><br/>Toiletries and bath linen like robes, towels and more should be inclusive.<br/><br/>Not only the room should be well tucked after clean up but also new bedding and linen should be provided.</p>
                {/* <p class="card-text">
                    <small class="text-muted">
                        <b>Hours</b>
                        <br/>Dinner
                        <br/>6:30 PM – 11:30 PM
                    </small>
                </p> */}
            </div>
            </div>
        </div>
    </div>
    <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://www.montcalm.co.uk/blog/wp-content/uploads/2018/04/new-bedding-and-linen.jpg" class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Available Services</h5>
                <p class="card-text">Sitting or waiting lounge should be well decorated and well-maintained. <br/> <br/>Free Wi-Fi without any restrictions should be provided.<br/><br/>It must have good accessibility features for the disabled and the elderly.<br/><br/>Special offers and packages should be provided to different kind of travellers, like people travelling for work, with family or for other events and celebrations.
                </p>
                </div>
                {/* <p class="card-text">
                    <small class="text-muted">
                        <b>Hours</b>
                        <br/>Bakery 8:00 AM -8:00 PM
                        <br/> Bar 11:00 AM– 11:00 PM 
                    </small>
                </p> */}
            </div>
            </div>
        </div>
   </>
  )
}

export default Luxury
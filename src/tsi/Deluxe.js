import React from 'react'
import "../styles/typesRoom.css"
function Delux() {
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
    <img src="https://www.eliaermouhotel.com/uploads/nr_photos/D1920/deluxeroom_8338.jpg" class="img-fluid" style={{"width":"2000px","height":"auto"}} alt="Responsive image"/>
    <div class="position-relative">
        <h1 class="dinning-heading display-3">Deluxe Rooms</h1>
    </div>

    <div class="dinning-text">
        <p>Deluxe rooms, are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub. ROOM FACILITIES.</p>
    </div>
    <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh26q0XF2Fbv-ZuVSXBhz7kbLyUo7H1NNeg&usqp=CAU" style={{"width":"2000px","height":"auto"}} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Complimentary services</h5>
                <p class="card-text">Complimentary services or products are those given to an audience / a customer without charge. This term is often used in the tourism and hospitality industry. <br/><br/>Complimentary bottle of water in your room <br/><br/> free Wifi <br/><br/> complimentary room service <br/><br/>an upgrade to a higher room category without additional costs.</p>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBorurq-_srfqWmMDnuJ6sPBE9vnpxNAv5g&usqp=CAU" style={{"width":"2000px","height":"360px"}} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Additional Services</h5>
                <p class="card-text">Rent-a-car<br/><br/>Airline reservation and confirmation<br/><br/>Multilingual staff<br/><br/>24-hour Manager on Duty<br/><br/>Dry cleaning and laundry<br/><br/>
Major credit cards accepted</p>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NIgd0rdEWfM1WRnb192y0rDk0-a988K-ZQ&usqp=CAU" style={{"width":"2000px","height":"360px"}} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Available Services</h5>
                <p class="card-text">Semi open & outdoor restaurant<br/><br/>
Poolside bar<br/><br/>
Car parking<br/><br/>
Swimming pool/ Jacuzzi<br/><br/>
Public computer<br/><br/>
Disable rooms & Interconnecting rooms<br/><br/>
24 Hour security
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

export default Delux
import React from 'react'
import '../styles/enquiry.css'
import { Link } from 'react-router-dom'
const Enquiry = () => {
    const submit=()=>{
        alert("Room Booked")
    }
  return (
    <>
    <nav id="navbar" style={{border:"1px solid black",marginBottom:"px"}}>
            <div class="container">
                <h1 class="logo"><a href="/back"><span class="text-warning">TSI</span> HOTEL</a></h1>
                <ul >
                    <li ><a class="/back" href="/back" style={{font:"5px"}}>Home</a></li>
                    <li><a href="/room">Rooms</a></li>
                    <li><a href="/extra">Explore</a></li>
                    <li><a href="/enquiry">Booking</a></li>
                   
                </ul>

            </div>
        </nav>
       <section class="contact" style={{ backgroundColor: "#CDF0EA" }}>
        <div class="container">
          <h1 class="section-heading">TSI Hotel Room Booking Form</h1>
          <form action="https://tsi-backend.vercel.app/enquiry" method="post">
            <div class="input-wrap">
              <label>First Name</label>
              <label>Last Name</label>
              <input type="text" name="firstname" placeholder="First Name *" />
              <input type="text" name="lastname" placeholder="Last Name *" />
            </div>
            <div class="input-wrap-2">
              <label>Email</label>
              <input type="email" name="email" placeholder="abc@gmail.com" />
              <label>Phone</label>
              <input type="text" name="phone" placeholder="1234567890" />
              <label>Address</label>
              <input type="text" placeholder="Street Address" />
              <input type="text" placeholder="Street Address Line 2" />
            </div>
            <div class="input-wrap">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
            </div>
            <div class="input-wrap-2">
              <input type="text" placeholder="Postal / Zip Code" />
            </div>
            <div class="input-wrap">
              <label>Check-In</label>
              <label>Check-Out</label>
              <input type="date" name="check_in" />
              <input type="date" name="check_out" />
            </div>
            <div class="input-wrap">
              <label>Number of Adults</label>
              <label>Number of Children</label>
              <input type="number" name="number_of_adults" placeholder="0" />
              <input type="number" name="number_of_children" placeholder="0" />
            </div>
            <div class="input-wrap-2">
              <label>Special mentions, requests or requirements:</label>
              <textarea
                name="query"
                id=""
                cols="30"
                rows="10"
                placeholder="..."
              ></textarea>
            </div>
            <div class="btn-wrapper" style={{marginTop:"50px"}}>
            
                <button class="btn btn-primary" onClick={submit}>
                Submit Form
              </button>
              
            </div>
          </form>
          <div
            style={{
              display: "flex",
              marginLeft: "260px",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <a href="/back">
              <button class="btn btn-primary">Back</button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Enquiry;

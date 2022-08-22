import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/room.css";
import NavvBar from "./NavvBar";
import { Link } from "react-router-dom";


const Room = () => {

  const navigate =useNavigate()
  
  const [roomType,setRoomType]= useState("");

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);

  const increment = () => {
    if (count < 5) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const increment1 = () => {
    if (count1 < 5) setCount1(count1 + 1);
  };
  const decrement1 = () => {
    if (count1 > 0) setCount1(count1 - 1);
  };
  const increment2 = () => {
    if (count2 < 5) setCount2(count2 + 1);
  };
  const decrement2 = () => {
    if (count2 > 0) setCount2(count2 - 1);
  };
  const increment3 = () => {
    if (count3 < 5) setCount3(count3 + 1);
  };
  const decrement3 = () => {
    if (count3 > 0) setCount3(count3 - 1);
  };
  const increment4 = () => {
    if (count4 < 5) setCount4(count4 + 1);
  };
  const decrement4 = () => {
    if (count4 > 0) setCount4(count4 - 1);
  };
  const increment5 = () => {
    if (count5 < 5) setCount5(count5 + 1);
  };
  const decrement5 = () => {
    if (count5 > 0) setCount5(count5 - 1);
  };

const red=()=>{
  console.log("hellooooooo")
  if(roomType==="deluxe"){
    navigate("/deluxe")
  
  }
}

  return (
    <div>
      <nav
        id="navbar"
        style={{ border: "3px solid black", marginBottom: "2px" }}
      >
        <div class="container">
          <h1 class="logo">
            <a href="/back">
              <span class="text-warning">TSI</span> HOTEL
            </a>
          </h1>

          <ul> 
           
           
            <li>
              <a class="current" href="/gallery" style={{ font: "5px" }}>
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/extra">Explore</a>
            </li>
            <li>
              <a href="/enquiry">Enquiry</a>
              
            </li>
          </ul>
        </div>
      </nav>
      <section
        class="tm-main"
        style={{ backgroundColor: "#003865", border: "3px solid black" }}
      >
        <p style={{fontSize:"40px"}}> <a href="/luxury" style={{marginRight:"200px",color:"gold"}}>LUXURY</a> <a href="/deluxe" style={{color:"gold",marginLeft:"20px"}}>DELUXE</a> <a href="/premier" style={{marginLeft:"200px",color:"gold"}}>PREMIERE</a> </p>
      </section>

      <section class="tm-roomsection" style={{ marginTop: "-91px" }}>
        <div class="tm-room1">
          <div class="tm-trans">
            {" "}
            <div>
              <p>2 Bed</p>
              <p>Complimentary liquor</p>
              <p>Free Wifi</p>{" "}
            </div>
            <div>
              <p>Only for</p>
              <p class="bold">₹ 1999.99</p>{" "}
            </div>
          </div>

          <a href="/luxury">
            {" "}
            <img
              class="tm-roomimage"
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
          </a>
          {/* <img class="tm-roomimage" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/ > */}
          <p class="s">
            Luxury Suite{" "}
            <span>
              <button onClick={increment}>
                <i className="fa-solid fa-plus"></i>{" "}
              </button>
            </span>
            <span>
              <button onClick={decrement}>
                <i class="fa-solid fa-minus"></i>
              </button>{" "}
              {count}
            </span>
          </p>
        </div>
        <div class="tm-room1">
          <div class="tm-trans">
            {" "}
            <div>
              <p>2 Bed</p>
              <p>Luxorious interior</p>
              <p>Free Wifi</p>{" "}
            </div>
            <div>
              <p>Only for</p>
              <p class="bold">₹ 1599.99</p>{" "}
            </div>
          </div>

          <a href="/deluxe">
            <img
              class="tm-roomimage"
              src="https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg"
            />
          </a>

          <p>
            Deluxe Suite{" "}
            <span>
              <button onClick={increment1}>
                <i class="fa-solid fa-plus"></i>{" "}
              </button>
            </span>
            <span>
              <button onClick={decrement1}>
                <i class="fa-solid fa-minus"></i>
              </button>{" "}
              {count1}
            </span>
          </p>
        </div>
        <div class="tm-room1">
          <div class="tm-trans">
            {" "}
            <div>
              <p>2 Bed</p>
              <p>Scenic View</p>
              <p>Free Wifi</p>{" "}
            </div>
            <div>
              <p>Only for</p>
              <p class="bold">₹ 1299.99</p>{" "}
            </div>
          </div>

          <a href="/premier">
            <img
              class="tm-roomimage"
              src="https://s7d2.scene7.com/is/image/ritzcarlton/pnrqz-king-50661983?$XlargeViewport100pct$"
            />
          </a>
          <p>
            Premiere Suite{" "}
            <span>
              <button onClick={increment2}>
                <i class="fa-solid fa-plus"></i>{" "}
              </button>
            </span>
            <span>
              <button onClick={decrement2}>
                <i class="fa-solid fa-minus"></i>
              </button>{" "}
              {count2}
            </span>
          </p>
        </div>
      </section>
      <br />
      <section class="tm-roomsection" style={{ marginTop: "-215px" }}>
        <div class="tm-room1">
          <div class="tm-trans">
            {" "}
            <div>
              <p>2 Bed</p>
              <p>Free wifi</p>
              <p>Fresh towels</p>{" "}
            </div>
            <div>
              <p>Only for</p>
              <p class="bold">₹ 999.99</p>{" "}
            </div>
          </div>

          <a href="/luxury">
            <img
              class="tm-roomimage"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blue-and-white-rooms-hbx090120inspoindex-006-1617124627.jpg"
            />
          </a>

          <p class="s">
            Luxury Room{" "}
            <span>
              <button onClick={increment3}>
                <i class="fa-solid fa-plus"></i>{" "}
              </button>
            </span>
            <span>
              <button onClick={decrement3}>
                <i class="fa-solid fa-minus"></i>
              </button>{" "}
              {count3}
            </span>
          </p>
        </div>
        <div class="tm-room1">
          <div class="tm-trans">
            {" "}
            <div>
              <p>2 Bed</p>
              <p>Fresh towels</p>
              <p>Less costly</p>{" "}
            </div>
            <div>
              <p>Only for</p>
              <p class="bold">₹ 799.99</p>{" "}
            </div>
          </div>

          <a href="/deluxe">
            <img
              class="tm-roomimage"
              src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000"
           style={{cursor:"pointer"}} />
          </a>

          <p>
            Delux Room{" "}
            <span>
              <button onClick={increment4}>
                <i class="fa-solid fa-plus"></i>{" "}
              </button>
            </span>
            <span>
              <button onClick={decrement4}>
                <i class="fa-solid fa-minus"></i>
              </button>{" "}
              {count4}
            </span>
          </p>
        </div>
        <div class="tm-room1">
          <div class="tm-trans">
            {" "}
            <div>
              <p>1 Bed</p>
              <p>Fresh towels</p>
              <p>Less costly</p>{" "}
            </div>
            <div>
              <p>Only for</p>
              <p class="bold">₹ 599.99</p>{" "}
            </div>
          </div>

          <a href="/premier">
            <img
              class="tm-roomimage"
              src="https://www.theparkhotels.com/images/site-specific/hyderabad/rooms/room-and-suites-banner.jpg"
            />
          </a>

          <p>
            Premiere Room{" "}
            <span>
              <button onClick={increment5}>
                <i class="fa-solid fa-plus"></i>{" "}
              </button>
            </span>
            <span>
              <button onClick={decrement5}>
                <i class="fa-solid fa-minus"></i>
              </button>{" "}
              {count5}
            </span>
          </p>
        </div>
      </section>
      <br />

      <section class="tm-makeres" style={{ marginTop: "-215px" }}>
        <div class="tm-res" style={{ backgroundColor: "#003865" }}>
          <div class="tm-resbutton">
            <a href="/enquiry">
              {" "}
              <p ><a href="/enquiry" style={{color:"gold"}}>Book Now</a></p>
            </a>
          </div>
        </div>
      </section>

      <footer class="tm-footer" style={{ marginTop: "-92px" }}>
        <div class="tm-us">
          <p class="bold">About Us</p>
          <p>
          
TSI hotels offer a front row seat to the corners of the globe. Discover your destination’s iconic landmarks, traditional celebrations and cultural delights—all with the peace-of-mind in knowing that TSI is always at your fingertips.
          </p>
        </div>

        <div class="tm-address">
          <p class="bold">Address</p>
          <p> Jaipur , Rajasthan Phone : (+91) 9668818296 Email : tsihotel@gmail.com</p>
        </div>
        <br />
        <div class="tm-media">
          <a href="https://www.facebook.com/suryansh.omar.5">
            {" "}
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" />
          </a>
          <a href="#">
            {" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" />{" "}
          </a>
          <a href="#">
            {" "}
            <img src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg" />{" "}
          </a>
          <a href="https://instagram.com/tanmaya.bhardwaj?igshid=YmMyMTA2M2Y=">
            {" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" />{" "}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Room;

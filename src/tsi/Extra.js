import React from 'react'
import '../styles/extra.css'

const Extra = () => {
  return (
   <>

<nav id="navbar" style={{border:"3px solid black",marginBottom:"2px"}}>
            <div class="container">
                <h1 class="logo"><a href="/back"><span class="text-warning">TSI</span> HOTEL</a></h1>
                <ul >
                    <li ><a class="current" href="/back" style={{font:"5px"}}>Home</a></li>
                    <li><a href="/room">Rooms</a></li>
                    <li><a href="/dining">Dinings</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/enquiry">Booking</a></li>
                </ul>

            </div>
            
        </nav>
	
<div style={{backgroundColor:"#9ED2C6"}}>


  <div class="section" >
      <div class="container">
        <div class="content-section" >
          <div class="title">
            <h1>Gym</h1>
          </div>
          <div class="content" >
            <p>
              Physical activity stimulates various brain chemicals that may
              leave you feeling happier, more relaxed and less anxious. You may
              also feel better about your appearance and yourself when you
              exercise regularly, which can boost your confidence and improve
              your self-esteem. Our hotel provide gym services so that you do
              not stop your regular exercise
            </p>
          </div>
        </div>
        <div class="image-section" >
          <img src="https://blog.nasm.org/hubfs/cleangym%20%281%29.jpg" alt="no image show "  />
        </div>
      </div>
    </div>
    <div class="section" >
      <div class="container">
        <div class="content-section">
          <div class="title">
            <h1>Spa</h1>
          </div>
          <div class="content" style={{}}>
            <p>
              The spa and wellness facilities are where people go to exercise
              and have special treatments in order to improve their health. The
              spa and wellness facilities include a sauna and gym. Our hotel
              have all types of spas
            </p>
            <ul>
              <li>Pamper Spa</li>
              <li>Destination Spas</li>
              <li>Mineral and Thermal Springs Spas</li>
              <li>Health Spa</li>
              <li>Club Spas</li>
            </ul>
          </div>
        </div>
        <div class="image-section" >
          <img src="https://2khjnx1nnhnyou6l41sbva21-wpengine.netdna-ssl.com/wp-content/uploads/2021/11/spa-packages.jpg" style={{marginTop:"50px",height:"320px",width:"500px"}}/>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="content-section">
          <div class="title">
            <h1>Gaming</h1>
          </div>
          <div class="content" style={{}}>
            <p>
              Game Parlor is a place where kids and youngsters come to play
              different high-definition games on large screens. There are many
              attractive designed games are in trends, in which the player
              involves fully by his hand or legs. The thrill and excitement are
              unparalleled. Different games in our hotel
            </p>
            <ul>
              <li>Bowling</li>
              <li>Billiards</li>
              <li>Table Tennis</li>
              <li>Badminton</li>
            </ul>
          </div>
        </div>
        <div class="image-section" >
          <img src="https://content3.jdmagicbox.com/comp/jalgaon/m1/9999px257.x257.160409133117.s3m1/catalogue/toss-game-zone-pratap-nagar-jalgaon-bowling-alleys-76lgl1v.jpg" style={{marginTop:"45px"}} />
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="content-section">
          <div class="title">
            <h1>Swimming pool</h1>
          </div>
          <div class="content" style={{}}>
            <p>
              It strengthens, sculpts, and helps you pick up speed. Gradually
              increase your range of motion through swimming. Features of the
              pool such as the water resistance and buoyancy reduce the impact
              of the exercise on your joints, enabling you to stretch and flex
              comfortably and effectively. Our swimming pool is properly
              maintained.
            </p>
          </div>
        </div>
        <div class="image-section">
          <img src="https://www.ucityguides.com/images/top10/marina-bay.jpg" style={{marginTop:"20px"}}/>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}

export default Extra

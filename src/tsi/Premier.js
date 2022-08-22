import React from "react";
import "../styles/typesRoom.css";
function Premier() {
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
      <img
        src="https://cache.marriott.com/content/dam/marriott-renditions/SFODS/sfods-king-guestroom-4378-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"
        class="img-fluid"
        style={{ width: "2000px", height: "auto" }}
        alt="Responsive image"
      />
      <div class="position-relative">
        <h1 class="dinning-heading display-3">Premier Rooms</h1>
      </div>

      <div class="dinning-text">
        <p>
          The Premier room is on a higher floor and the items in the minibar is
          complimentary - just some soft drinks and two packets of local nuts.
          The higher floors have better views.
        </p>
      </div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uSeX0l6tGzUkoPk1S8qnEgOx-nw0b66CkA&usqp=CAU"
              style={{ width: "2000px", height: "300px" }}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Complimentary services</h5>
              <p class="card-text">
                Complimentary services or products are those given to an
                audience / a customer without charge. This term is often used in
                the tourism and hospitality industry. <br />
                <br /> super-comfy double or kingsize bed with duvet <br />
                <br /> remote control TV <br />
                <br />
                tea and coffee making facilities
                <br />
                <br />
                desk area
              </p>
             
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/icon-premier-devarabisanahalli/Studio_--Queen_Bed_%7C_Icon_Premier,_Devarabisanahalli"
              style={{ width: "2000px", height: "300px" }}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Additional Services</h5>
              <p class="card-text">
                <br />
                Complimentary refreshments
                <br />
                <br />
                High-Speed Internet
                <br />
                <br />
                Business center
                <br />
                <br />
                Airport pickup and drop-off
                <br />
                <br />
                Quality toiletries
                <br />
                <br />
                Fitness and wellness facilities
                <br />
                <br />
                In-house restaurant
              </p>
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
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/premiere-room-leela-palace-hotel-delhi.jpg?VersionId=hgokHTugrnxJuYQu6JkY6rxiKEsl3XM1&itok=lrfkFGWl"
              style={{ width: "2000px", height: "300px" }}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Available Services</h5>
              <p class="card-text">
                <br />
                40” Television with international cable programs
                <br />
                <br />
                High-speed WiFi access
                <br />
                <br />
                An electronic safe
                <br />
                <br />
                Two-line speakerphone with voicemail
                <br />
                <br />
                DVD Player
                <br />
                <br />
                Mini Refrigerator
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
  );
}

export default Premier;

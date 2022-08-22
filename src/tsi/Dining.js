import React from "react";
import "../styles/dining.css";
const Dining = () => {
  return (
    <>
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
              <a class="current" href="/back" style={{ font: "5px" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/room">Room</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
            </li>
            <li>
              <a href="/extra">Explore</a>
            </li>
          </ul>
        </div>
      </nav>
      <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/10/30/1222/Hyatt-India-P003-Food-and-Beverage.jpg/Hyatt-India-P003-Food-and-Beverage.gallery-2-3-item-panel.jpg?imwidth=1920" class="img-fluid" alt="Responsive image"/>
      <div class="position-relative">
        <h1 class="dinning-heading display-3">Dining</h1>
      </div>
      <div class="dinning-text">
        <p>
          TSI hotels offers concept dining outlets, each capturing the essence
          of culture and cuisine in a unique way. Interactive culinary elements,
          and open-air designs, complement the experience. Our restaurant also
          offers wellness, vegetarian and vegan selections. We take an
          innovative approach to restaurants and bars that place an emphasis on
          consciously sourced ingredients and local artisans’ produce.
        </p>
      </div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/11/25/0138/JAIRJ-R004-Shrot.jpg/JAIRJ-R004-Shrot.16x9.jpg?imwidth=960"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">SHROT</h5>
              <p class="card-text">
                SHROT which means “Source” is inspired by the strong roots of
                our culture. It will treat you with refreshing and regional
                delicacies sourced locally and cultivated naturally. The
                restaurant uses clean, simple and pure regional recipes,
                involves local artisans and sources untreated and naturally
                available ingredients available locally.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <b>Hours</b>
                  <br />
                  Breakfast/ Lunch / Dinner
                  <br />
                  7:00 AM – 10:30 AM / 12:30 PM – 3:00 PM / 7:00 PM – 11:00 PM
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/11/25/0138/JAIRJ-R002-The-North-Club.jpg/JAIRJ-R002-The-North-Club.16x9.jpg?imwidth=960"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">THE NORTH CLUB</h5>
              <p class="card-text">
                The North Club carries forward the timeless club culture of
                Jaipur. It takes you back to the elegant nostalgia of Colonial
                India as the cuisine here takes influence from the various
                colonies that were developed in the Indian sub-continent.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <b>Hours</b>
                  <br />
                  Dinner
                  <br />
                  6:30 PM – 11:30 PM
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/11/25/0138/JAIRJ-R005-The-Royal-Bakery-And-Bar.jpg/JAIRJ-R005-The-Royal-Bakery-And-Bar.4x3.jpg?imwidth=960"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">THE ROYAL BAKERY AND BAR</h5>
              <p class="card-text">
                Bakery: Serves fresh batch cooked bakeries, classic pastries and
                signature cakes. <br /> <br /> Bar: “A destination for the
                curious” offering time-honoured classic cocktails inspired by
                hallmarks of the era. The bar renders a tour of the hotel’s
                signature food & beverage through its culinary showcase of
                mono-bites.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <b>Hours</b>
                  <br />
                  Bakery 8:00 AM -8:00 PM
                  <br /> Bar 11:00 AM– 11:00 PM
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dining;

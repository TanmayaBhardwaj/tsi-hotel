import React from 'react'
//   import "../styles/newAbout.css"

const About = () => {
  return (
    <div>
      <header>
        <nav id="navbar">
          <div class="container">
            <h2 class="logo">
              <a href="index.html">
                <span class="text-primary"> TSI </span> Hotel
              </a>
            </h2>
            <ul>
              <li>
                <a href="/back">Home</a>
              </li>
              <li>
                <a class="current" href="/about">
                  About
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="about-info" class="bg-light py-3">
        <div class="container">
          <div class="info-left">
            <h1 class="l-heading">
              <span class="text-primary">About </span> TSI Hotel{" "}
            </h1>
            <p>
              TSI hotels offer a front row seat to the corners of the globe.
              Discover your destination’s iconic landmarks, traditional
              celebrations and cultural delights—all with the peace-of-mind in
              knowing that TSI is always at your fingertips.
            </p>

            <p>
              But what truly makes TSI, well, grand, is the sensation of feeling
              totally at ease while embarking on your next journey. Experience
              superior service within a multicultural backdrop of dramatic
              architecture, inventive restaurants, luxury spas.
            </p>
          </div>
          <div class="info-right">
            <img
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/04/12/1329/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.jpg/MUMGH-P0765-Inner-Courtyard-Hotel-Exterior-Evening.16x9.jpg"
              alt="About Page"
            />
          </div>
        </div>
      </section>

      <div class="clr"></div>

      <section id="testimonials" class="py-3">
        <div class="container">
          <h2 class="l-heading">What our Guests Says</h2>
          <div class="testimonial bg-secondary" >
            <img
              src="https://img.indiaforums.com/person/480x360/1/2908-disha-patani.jpg"
              alt="Disha Patani"
            />
            <p style={{color:"white"}}>
              “The place is very well designed. The staff here was also very
              helpful and cooperative. I’d specifically like to thank Mr.
              Tanmaya & Team at the front desk for this amazing experience.”
            </p>
          </div>
          <div class="testimonial bg-secondary">
            <img
              src="https://www.breezemasti.com/wp-content/uploads/Shivani-Narayanan-Actress-biography-age-family-serial-wiki.jpg"
              alt="Shivani Narayan"
            />
            <p style={{color:"white"}}>
              “Very amicable and hospitable staff. Mostly interacted with
              reception staff during the one night stay, they were very friendly
              and responsive. Spacious property at a good location.”
            </p>
          </div>
        </div>
      </section>

      <footer class="main-footer">
        <p>TSI Hotel &copy; 2022 | All Rights Reserved By TSI </p>
      </footer>
    </div>
  );
}

export default About
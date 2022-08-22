import React from 'react'
import '../styles/style2.css'

const Home = () => {
  return (
    <div>

      <header style={{

      }}>
        <nav id="navbar">
            <div class="container" style={{
                
            }}>
                <h1 class="logo"><a href="index.html"> <span style={{color:"#FF9933"}}>T</span><span className="text-light">S</span><span className="text-success">I</span> HOTEL</a></h1>
                <ul>
                    <li ><a class="" href="/room" style={{font:"5px"}}>Room</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/extra">Explore</a></li>     
                </ul>

            </div>
            
        </nav>
    

        <div id="showcase">
            <div class="container">
                <div class="showcase-content">
                    {/* <h1><span style={{
                        color:"white",
                        
                    }}>TSI</span> HOTEL</h1> */}
                    <p class="lead" style={{marginTop:"310px",marginLeft:"5px",color:"gold"}}>Enjoy your day with us </p>
                    <a class="btn" href="/about" style={{marginTop:"-240px"}}>About our Hotel</a>
                </div>
            </div>
        </div>
    </header>

    <section id="home-info" class="bg-dark" >
        <div class="info-img"></div>
        <div class="info-content">
            <h1><span class="text-primary">The History</span> of Hotel</h1>
            <p>The TSI HOTEL is a classical hotel
                set on the edge of Jaipur. 
               It offers a beautiful view to watch.
               </p>
            <a href="/about" class="btn btn-secondary">Read More </a>
        </div>
        
    </section>

    <section id="features" >
        <div class="box " style={{backgroundColor:"#FF9933"}}> 
            <i class="fas fa-hotel fa-3x"></i>
            <h3>Great Location</h3>
            <p>It offers a great location with beautiful views. </p>
        </div>
        <div class="box bg-light" >
            <i class="fas fa-utensils fa-3x"></i>
            <h3>Free Meals</h3>
            <p>Lots of saving offers go well here almost everyday.</p>
        </div>
        <div class="box " style={{backgroundColor:"#138808"}}>
            <i class="fas fa-dumbbell fa-3x"></i>
            <h3>Fitness Room</h3>            
            <p>Beautiful fitness rooms to be fit and hit the gym</p>
        </div>

    </section>
    <footer class="main-footer">
        <p>TSI HOTEL &copy; 2022 | All Rights Reserved By TSI</p>
    </footer>
    </div>
  )
}

export default Home

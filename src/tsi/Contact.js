import React from 'react'

const Contact = () => {
  return (
    <>
    
    <header class="tm-header">
        {/* <img class="tm-logo" src="images/Majestic_Hotel_hd.png" alt="Majestic Hotel"/> */}
        <nav id="navbar" style={{fontSize:"18px"}}>
            <div class="container" >
                <h1 class="logo"><a href="/back"><span class="text-warning">TSI</span> HOTEL</a></h1>
                <ul >
                    <li ><a class="/back" href="/back" >Home</a></li>
                    <li><a href="/room">Rooms</a></li>
                    <li><a href="/extra">Explore</a></li>
                    <li><a href="/enquiry">Booking</a></li>
                   
                </ul>

            </div>
        </nav>
    </header>
    
    
    <section class="tm-main" style={{backgroundColor:"#003865"}}>
           <p>Contact</p>
    </section>
    
    <section class="tm-booking">
    
    <form>
        <div class="tm-form1">
    <input  type="text" name="name" placeholder="Name"/>  
    <input type="email" name="email" placeholder="E-mail"/> 
            <textarea  placeholder="Your message..." rows="4" ></textarea>
   
            <input onClick={()=>{
                alert("message sent")
            }} type="submit" id="sub2" value="Send"/>

    </div>
        </form> 
        
        <div class="vertical-line"> </div>
        
    <div class="tm-form2">
   <div class="tm-cl">
        <p class="here">We are situated over here</p><img id="place" src="https://github.com/sumitmangela/hotel/blob/master/images/placeholder.png?raw=true" style={{
            position:"relative", left:"-180px", top:"180px",right:"50px"
        }}/>

        <div id="map">
            <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="map"  style={{
                height:"300px",
                width:"300px",
            }}/>
        </div>

     
    </div>
    </div>
        
  </section>
    
    
  <footer class="tm-footer">
        <div class="tm-us">
        <p class="bold">About Us</p>
        <p>
TSI hotels offer a front row seat to the corners of the globe. Discover your destination’s iconic landmarks, traditional celebrations and cultural delights—all with the peace-of-mind in knowing that TSI is always at your fingertips.</p>    
        </div>
       
        <div class="tm-address">
        <p class="bold">Address</p>
        <p>Jaipur , Rajasthan
            Phone : (+91) 9668814286
            Email : tsihotel@gmail.com</p>    
        </div>
        <br/>
        <div class="tm-media">
        <a href="#"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"/></a>
        <a href="#"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"/> </a>
        <a href="#"> <img src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"/> </a>
        <a href="#">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"/> </a>
        
        </div>
       
    </footer>
    
    </>
  )
}

export default Contact;

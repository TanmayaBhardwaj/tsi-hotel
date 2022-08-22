import React from 'react'

const NavvBar = () => {
  return (
    <div>
       <nav id="navbar">
            <div class="container" style={{
                
            }}>
                <h1 class="logo"><a href="index.html"><span class="text-warning">TSI</span> HOTEL</a></h1>
                <ul>
                    <li ><a class="current" href="index.html" style={{font:"5px"}}>Room</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="Contact.html">Contact</a></li>
                </ul>

            </div>
            
        </nav>
    </div>
  )
}

export default NavvBar

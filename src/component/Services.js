import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import facebook  from "../assets/images/image3.jpeg"
// import fiest from "../assets/images/image6.png";
import second from "../assets/images/image4.jpeg";
import third from "../assets/images/image2.jpg"


const Services = () => {
  return (
       <div className='services'>
        <Carousel 
        infiniteLoop 
        autoPlay 
        interval={1000}
        showStatus={false} 
        showThumbs={false} 
        showArrows={false}>
          {/* <div>
            <img src={facebook} alt="image1"></img>
          </div> */}
          {/* <div>
            <img src={fiest} alt="image2"></img>
          </div> */}
          <div>
            <img src={second} alt="image3"></img>
          </div>
          <img src={third} alt='image4'></img>
          
        </Carousel>

       </div>
  )
}

export default Services

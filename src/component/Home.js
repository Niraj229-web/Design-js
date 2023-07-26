import React from 'react'
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai"


const Home = () => {
  return (
    <>
   <div className="Home" id="home">
    <main>
      <h1>Design!</h1>
      <p>Make a new style</p>
    </main>
   </div>

   <div className='Home2'>

    <div>
    <h2>Who we are ?</h2> 
    <p>Lorem ipsum dolor sit amet. Id alias blanditiis est recusandae maxime est facilis iste et itaque delectus non consequuntur voluptas est fugit ipsa et quam voluptas. Quo numquam soluta eum quia sunt eos voluptatem galisum et illum maiores qui voluptatibus nisi qui libero quod non sunt incidunt. Qui reiciendis asperiores ut dolor laboriosam aut molestiae voluptas qui fugit vitae qui eius molestiae rem possimus minima. 
    </p>
   </div>
   </div>

   <div className='Home3' id="about">
    <div>
    <h2>What we Do ?</h2> 
    <p>Lorem ipsum dolor sit amet. Id alias blanditiis est recusandae maxime est facilis iste et itaque delectus non consequuntur voluptas est fugit ipsa et quam voluptas. Quo numquam soluta eum quia sunt eos voluptatem galisum et illum maiores qui voluptatibus nisi qui libero quod non sunt incidunt. Qui reiciendis asperiores ut dolor laboriosam aut molestiae voluptas qui fugit vitae qui eius molestiae rem possimus minima. 
    </p>
   </div>
   </div>

   <div className="Home4" id="brands">
    <div>
      <h1>Our Brands</h1>
    </div>
    <article>
    <div>
     <AiFillGoogleCircle/>
      <p>Google</p>
    </div>
    <div>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
    </div>
    <div>
      <AiFillYoutube/>
      <p>Youtube</p>
    </div>
    <div>
      <AiFillInstagram/>
      <p>Insatgram</p>
    </div>
    <div>
      <AiFillTwitterCircle/>
      <p>Twitter</p>
    </div>
    </article>

   </div>
  

   </>
  ) 
}

export default Home
 
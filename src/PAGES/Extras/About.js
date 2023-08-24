import React from 'react'
import SingleBanner from '../../components/Banners/SingleBanner'
import Footer1 from '../../components/Footer/Footer1'
import Footer2 from '../../components/Footer/Footer2'
import Navbar from '../../components/Navbar/Navbar'
import './Extrapages.css'

const About = () => {
  return (
    <div className='extrapage'>
        <Navbar/>
        <SingleBanner heading="About Us" 
        bannerimage = "https://www.shutterstock.com/image-photo/healthy-vegan-vegetarian-food-diet-600w-1214189767.jpg"
       />
       <div className="pgleft pgcommon">
        <img src="https://www.shutterstock.com/image-photo/healthy-vegan-vegetarian-food-diet-600w-1214189767.jpg"
        alt='noimg'/>

        <div>
            <h1>Our Story</h1>
            <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. the master-builder of human happiness. No one rejects, dis
            </p>
        </div>
       </div>

       <div className="pgright pgcommon">
        <img src="https://www.shutterstock.com/image-photo/healthy-vegan-vegetarian-food-diet-600w-1214189767.jpg"
        alt='noimg'/>

        <div>
            <h1>Who are we?</h1>
            <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. the master-builder of human happiness. No one rejects, dis
            </p>
        </div>
       </div>
       <Footer1/>
       <Footer2/>
    </div>
  )
}

export default About
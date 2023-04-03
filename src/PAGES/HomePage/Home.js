import React from 'react'
import BannerSlider from '../../components/Banners/BannerSlider'
import HomeCategories from '../../components/Category/HomeCategories'
import Footer1 from '../../components/Footer/Footer1'
import Footer2 from '../../components/Footer/Footer2'
import Navbar from '../../components/Navbar/Navbar'
import Product_Sidebar from '../../components/Product/Product_Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <Product_Sidebar/>
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Home
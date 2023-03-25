import React from 'react'
import BannerSlider from '../../components/Banners/BannerSlider'
import HomeCategories from '../../components/Category/HomeCategories'
import Navbar from '../../components/Navbar/Navbar'
import Product_Sidebar from '../../components/Product/Product_Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <Product_Sidebar/>
    </div>
  )
}

export default Home
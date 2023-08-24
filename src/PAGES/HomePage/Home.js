import React from 'react'
import BannerSlider from '../../components/Banners/BannerSlider'
import HomeCategories from '../../components/Category/HomeCategories'
import Footer1 from '../../components/Footer/Footer1'
import Footer2 from '../../components/Footer/Footer2'
import Navbar from '../../components/Navbar/Navbar'
import Product_Sidebar from '../../components/Product/Product_Sidebar'
import img1 from '../../assets/Images/1.png'
import img2 from '../../assets/Images/2.png'
import img3 from '../../assets/Images/3.png'
import img4 from '../../assets/Images/4.png'
import img5 from '../../assets/fruits/grapes.jpeg'
import img6 from '../../assets/fruits/strawberry.jpeg'
import img7 from '../../assets/fruits/watermelon.jpeg'
import img8 from '../../assets/fruits/pineapple.jpeg'
import ProductSlider from '../../components/Product/ProductSlider'

const Home = () => {
  const productss = [
    {
     id:1,
     productimage: img1,
     productname: 'Orange',
     productprice: 100,
     counttype: '1 per kg',
     discountpercent: 20
    },
    {
        id:2,
        productimage: img2,
        productname: 'Apple',
        productprice: 50,
        counttype: '1 per kg',
        discountpercent: 10
    },
    {
        id:3,
        productimage: img3,
        productname: 'Home Items',
        productprice: 60,
        counttype: '1 per kg',
        discountpercent: 15
    },
    {
        id:4,
        productimage: img4,
        productname: 'Grocery',
        productprice: 40,
        counttype: '1 per kg',
        discountpercent: 12
    },
    {
        id:5,
        productimage: img5,
        productname: 'Orange',
        productprice: 100,
        counttype: '1 per kg',
        discountpercent: 20,
       },
       {
        id:6,
        productimage: img6,
        productname: 'Apple',
        productprice: 100,
        counttype: '1 per kg',
        discountpercent: 20,
       },
       {
        id:7,
        productimage: img7,
        productname: 'Home Items',
        productprice: 100,
        counttype: '1 per kg',
        discountpercent: 20,
       },
       {
        id:8,
        productimage: img8,
        productname: 'Grocery',
        productprice: 100,
        counttype: '1 per kg',
        discountpercent: 20,
       },
       {
        id:9,
        productimage: img1,
        productname: 'Orange',
        productprice: 100,
        counttype: '1 per kg',
        discountpercent: 20,
       },
       {
        id:10,
        productimage: img2,
        productname: 'Apple',
        productprice: 100,
        counttype: '1 per kg',
        discountpercent: 20,
       },
       {
        id:11,
        productimage: img3,
        productname: 'Home Items',
        productprice: 100,
        counttype: '1 per kg',
        discountpercent: 20,
       },
       {
        id:12,
        productimage: img4,
        productname: 'Grocery',
        productprice: 100,
        counttype: '1 per kg',
        discountpercent: 20,
       }]

  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <Product_Sidebar/>
        <div className='slidercont'>
            <ProductSlider products={productss} categoryname='Related Products'/>
        </div>
        <br/>
        <div className='slidercont'>
            <ProductSlider products={productss} categoryname='Explore More'/>
        </div>
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Home
import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../assets/Images/1.png'
import img2 from '../../assets/Images/2.png'
import img3 from '../../assets/Images/3.png'
import img4 from '../../assets/Images/4.png'

import './AllProduct.css'

const AllProduct = () => {
    const products = [
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
            productimage: img1,
            productname: 'Orange',
            productprice: 100,
            counttype: '1 per kg',
            discountpercent: 20,
           },
           {
            id:6,
            productimage: img2,
            productname: 'Apple',
            productprice: 100,
            counttype: '1 per kg',
            discountpercent: 20,
           },
           {
            id:7,
            productimage: img3,
            productname: 'Home Items',
            productprice: 100,
            counttype: '1 per kg',
            discountpercent: 20,
           },
           {
            id:8,
            productimage: img4,
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
    <div className='allproducts'>
        <h1>All Products</h1>
        <div className='products'>
            {
                products.map((item) => {
                    return(
                        <ProductCard data={item} key={item.id} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllProduct
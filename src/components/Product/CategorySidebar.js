import React from 'react'
import './CategorySidebar.css'
import img1 from '../../assets/Images/1.png'
import img2 from '../../assets/Images/2.png'
import img3 from '../../assets/Images/3.png'
import img4 from '../../assets/Images/4.png'

const CategorySidebar = () => {
    const data = [{
        id:1,
        categoryimage: img1,
        categoryname: 'Vegetables'
    },
    {
        id:2,
        categoryimage: img2,
        categoryname: 'Fruits'
    },
    {
        id:3,
        categoryimage: img3,
        categoryname: 'Dinner'
    },
    {
        id:4,
        categoryimage: img4,
        categoryname: 'Lunch'
    },
    {
        id:5,
        categoryimage: img1,
        categoryname: 'Vegetables'
    },
    {
        id:6,
        categoryimage: img2,
        categoryname: 'Fruits'
    },
    {
        id:7,
        categoryimage: img3,
        categoryname: 'Dinner'
    },
    {
        id:8,
        categoryimage: img4,
        categoryname: 'Lunch'
    }]

    return (
    <div className='categorysidebar'>
        {
            data.map((item)=> {
                return(
                    <div className='category'>
                        <img src={item.categoryimage} alt='categoryimage'/>
                        <p>{item.categoryname}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CategorySidebar
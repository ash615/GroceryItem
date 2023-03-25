import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {

    const data = [{
        id: 1,
        image: require('../../assets/grocerybackground.jpg'),
        title: 'Fresh Fruits & Vegetables at your doorstep',
        description: 'We are having your needed Grocery Items and Vegetables, Fruits. You can explore all the things on our Platform.',
        button: "Shop Now"
    },
    {
        id: 2,
        image: require('../../assets/grocerybackground1.jpg'),
        title: 'Fresh Fruits & Vegetables at your doorstep',
        description: 'We are having your needed Grocery Items and Vegetables, Fruits. You can explore all the things on our Platform.',
        button: "Shop Now"
    },
    {
        id: 3,
        image: require('../../assets/grocerybackground2.jpg'),
        title: 'Fresh Fruits & Vegetables at your doorstep',
        description: 'We are having your needed Grocery Items and Vegetables, Fruits. You can explore all the things on our Platform.',
        button: "Shop Now"
    }]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

  return (
    <div className='bannerslider'>
        <Slider className='bannerSlider' {...settings}>
            {
                data.map(item => {
                    return(
                        <div className='imagecont' key={item.id}>
                            <img src={item.image} alt='no image'/>
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <span>{item.description}</span>
                                <button>{item.button}</button>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default BannerSlider
import React from 'react'
import './ProductSlider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/fruits/orange.jpeg'
import img2 from '../../assets/fruits/strawberry.jpeg'
import img3 from '../../assets/fruits/watermelon.jpeg'
import img4 from '../../assets/fruits/pineapple.jpeg'
import img5 from '../../assets/fruits/grapes.jpeg'
import img6 from '../../assets/fruits/strawberry.jpeg'
import img7 from '../../assets/fruits/watermelon.jpeg'
import img8 from '../../assets/fruits/pineapple.jpeg'
import ProductCard from './ProductCard';

const ProductSlider = ({products, categoryname}) => {

    // Responsive designs according to the Screen Sizes...
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='productsliderout'>
        <h1>{categoryname}</h1>
{/* Carousel component has many attributes see them on google or npm packages list */}
        <Carousel responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        autoPlaySpeed={3000}>
            {
                products.map((item)=>{
                    return(
                        <ProductCard data ={item} key={item.id}/>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default ProductSlider
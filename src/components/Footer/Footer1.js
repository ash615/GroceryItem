import React from 'react'
import './Footer1.css'
import veges from '../../assets/veges.png'

const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className='left'>
            <img src={veges} alt='veges'/>
        </div>
        <div className='right'>
            <h1>Fresh Vegetables & Fruits at your doorstep.</h1>
            <p>We deliver fresh vegetables and fruits at your doorstep</p>
        </div>
    </div>
  )
}

export default Footer1
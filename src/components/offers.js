import React from 'react'
import '../styles/offers.css'

const Offers = ({offer}) => {
  return (
    <div className='offerSection'>
        {
            offer.map((item, index) => (
                <a href={item.url}>
                  <img src={item.image} alt={`${index} image`} />
                </a>
            ))
        }
    </div>
  )
}

export default Offers
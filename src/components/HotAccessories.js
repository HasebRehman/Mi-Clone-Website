import React from 'react'
import '../styles/HotAccessories.css'

const HotAccessories = ({music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
      <div className='firstDivBox'>
        <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="music picture" />
      </div>

      <div className='secondDivBox'>
        {
          music && music.map((item, index) => (
            <div className='HotItemCard'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          ))
        }
        {
          smartDevice && smartDevice.map((item, index) => (
            <div className='HotItemCard'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          ))
        }
        {
          home && home.map((item, index) => (
            <div className='HotItemCard'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          ))
        }
        {
          lifeStyle && lifeStyle.map((item, index) => (
            <div className='HotItemCard'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          ))
        }
        {
          mobileAccessories && mobileAccessories.map((item, index) => (
            <div className='HotItemCard'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          ))
        }
        <img className='HotItemCard' src="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
        
      </div>
    </div>
  )
}

export default HotAccessories
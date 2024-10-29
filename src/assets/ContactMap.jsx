import React from 'react'

import googleMap from '../images/map.svg'
import youtube from '../images/youtube-square.svg'
import twitter from '../images/x-square.svg'
import facebook from '../images/facebook-square.svg'
import insta from '../images/insta-square.svg'
import map from '../images/bx-map.svg'
import time from '../images/bx-time.svg'
import phone from '../images/bx-phone.svg'

const ContactMap = () => {
  return (
    <section className='mapSection container'>
      <div className='googleMap'><img src={googleMap} alt="" className=''/></div>
      <div>
        <div className='mapcard'>
          <h2>Medical Center 1</h2>
            <p className='mapline' ><img src={map} alt="" />4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p className='mapline' ><img src={phone} alt="" />(406) 555-0120</p>
            <p className='mapline' ><img src={time} alt="" />Mon - Fri: 9:00 am - 22:00 am</p>
            <p className='mapline' ><div className='gap'></div>Sat - Sun: 9:00 am - 20:00 am</p>
        </div>
        <div className='mapcard'>
          <h2>Medical Center 1</h2>
            <p className='mapline' ><img src={map} alt="" />2464 Royal Ln. Mesa,New Jersey 45463</p>
            <p className='mapline' ><img src={phone} alt="" />(406) 544-0123</p>
            <p className='mapline' ><img src={time} alt="" />Mon - Fri: 9:00 am - 22:00 am</p>
            <p className='mapline' ><div className='gap'></div>Sat - Sun: 9:00 am - 20:00 am</p>
        </div>



        <div className='maplinks container'>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={insta} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </section>
  )
}

export default ContactMap
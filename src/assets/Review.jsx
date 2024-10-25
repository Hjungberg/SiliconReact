import React from 'react'

import Quotes from '../images/quotes.svg'
import Stars4 from '../images/4stars.svg'
import Stars5 from '../images/5stars.svg'
import Fanny from '../images/fanny.svg'
import Albert from '../images/albert.svg'

const Review = () => {
  return (
    <section aria-label="Clients are loving our app" className="reviews">
  <div className="container space-y-3">
    <div className="clients">
      <div className="client-cards">
        <p className="eb-40">Clients are Loving Our App</p>
      </div>
      <div className="client-cards">
        <img src={Quotes} alt="" className="client-img1" />
        <img src={Stars4}alt="" className="client-img2" />
        <p>
          Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
        </p>
        <img src={Fanny} alt="" className="client-img3" />
      </div>
      <div className="client-cards">
        <img src={Quotes} alt="" className="client-img1" />
        <img src={Stars5} alt="" className="client-img2" />
        <p>
          Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
        </p>
        <img src={Albert} alt="" className="client-img3" />
      </div>
    </div>
  </div>
</section>

  )
}

export default Review
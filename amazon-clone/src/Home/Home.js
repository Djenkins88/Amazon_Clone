import React from 'react'
import "./Home.css"
import "../Product/Product"
import Product from '../Product/Product'

function Home() {
  return (
    <div className='home'>
      <img 
        className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner" />
        <div className='home__row'>
          <Product
            id='12311341'
            title="The Lean Startup:"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
          />
        <Product
            id='12311341'
            title="The Lean Startup:"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
          />
        </div>

        <div className='home__row'>
          <Product
            id='12311341'
            title="The Lean Startup:"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
          />
        <Product
            id='12311341'
            title="The Lean Startup:"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
          />
        </div>

        <div className='home__row'>
          <Product
            id='12311341'
            title="The Lean Startup:"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
          />
        <Product
            id='12311341'
            title="The Lean Startup:"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
          />
        </div>
    </div>
  )
}

export default Home
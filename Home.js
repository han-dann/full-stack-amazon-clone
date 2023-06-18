import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
       <div className="home__container">
            <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product 
                id="12345678"
                title="Non-tarnish Gold Chain Necklace,
                Paperclip Silver Chain Anklet, Ball Bracelet, 
                Cable Chain, Dainty, Curb Chain, 
                Ivy Link Chain, WATERPROOF" 
                price={29.99} 
                image="https://i.etsystatic.com/37704659/r/il/c98c76/4854346760/il_1588xN.4854346760_r7dk.jpg"
                rating={5}
                 />
                <Product 
                id="910111213"
                title="Sterling Silver Chain Necklace, Twisted Chain, 
                Ball Chain, Cable Chain, Dainty, Curb Chain, 
                Ivy Chain, Link Chain, WATERPROOF, Non tarnish" 
                price={19.99} 
                image="https://i.etsystatic.com/37704659/r/il/367d87/
                4779130434/il_1588xN.4779130434_6imr.jpg"
                rating={3}
                />
                <Product
                id="1415161718"
                title="14K Gold Filled Angel Number Necklace, 222 Silver Lucky 
                Number Necklace, 111 Rose Necklace, 333 WATERPROOF necklace, 
                777 necklace, 999 necklace" 
                price={39.99} 
                image="https://i.etsystatic.com/
                37704659/r/il/7ad3d4/4774002533
                /il_1588xN.4774002533_tuep.jpg"
                rating={4} 
                />
            </div>

            <div className="home__row">
                <Product 
                 id="19202122"
                 title="Tear Drop Birthstone Necklace, 
                 Personalized Christmas Gift for Her under 30, 
                 Modern Birthstone Necklace" 
                 price={69.99} 
                 image="https://i.etsystatic.com/37704659/r/il/
                 ee49ee/4720052544/il_1588xN.4720052544_ml4v.jpg"
                 rating={5} 
                />
                <Product 
                 id="23242526"
                 title="Bridesmaid gifts jewelry, bridesmaid proposal rings, maid of honor gift, initial ring" 
                 price={49.99} 
                 image="https://i.etsystatic.com/37704659/r/il/b22fd9/4763107186/il_1588xN.4763107186_60iq.jpg"
                 rating={4} 
                />
                <Product 
                 id="27282930"
                 title="Personalized Necklace, 
                 Custom Kids Names Necklace, 3D Vertical Bar Necklace,
                 Mothers Day Gift" 
                 price={39.99} 
                 image="https://i.etsystatic.com/37704659/
                 r/il/da9d03/4769445603/il_1588xN.4769445603_tay8.jpg"
                 rating={5} 
                 />
                <Product 
                id="31323334"
                title="777 Angel Number Bracelet with Wings, 
                777 bracelet, Personalized Lucky Number Jewelry" 
                price={79.99} 
                image="https://i.etsystatic.com/37704659/
                r/il/589865/4869312052/il_1588xN.4869312052_tm0j.jpg"
                rating={2} 
                />
            </div>

            <div className="home__row">
                <Product 
                id="35363738"
                title="Earrings with Birth Flower Name, 
                Personalized Name Earrings, Birth Flower Earrings, 
                Custom Gold Name Jewelry, Birthday Gift, Christmas Gift" 
                price={59.99} 
                image="https://i.etsystatic.com/37704659/r/il/566571/4980964391/il_1588xN.4980964391_m6n7.jpg"
                rating={5} 
                />
            </div>
       </div>
    </div>
  )
}

export default Home

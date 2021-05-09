import React from 'react'
import "./Home.css";
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_146|m_lgAX6a65c_c386561644245" ><img className="home__image" src="https://storage.googleapis.com/freesat-production-assets/styles/teaser_hero_image_1440x500_/cloud-storage/news/headliners/amazon-prime-video-banner.jpg" atr="banner"/></a>
                <div className="home__row">
                    <Product 
                    id="3436252455625"
                    title="Redmi 9 Power (Mighty Black, 6GB RAM, 128GB Storage) - 6000mAh Battery |FHD+ Screen| 48MP Quad Camera | Snapdragon 662 Processor" 
                    price="12999" 
                    image="https://m.media-amazon.com/images/I/61LHaUOhehL._AC_UY218_.jpg"
                    rating={4}/>
                    <Product 
                    id="3435464656655"
                    title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set" 
                    price="1999" 
                    image="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY218_.jpg"
                    rating={3}/>
                </div>
                <div className="home__row">
                   <Product id="2323232555656"
                   title="HP 15 (2021) Thin & Light Ryzen 3-3250 Laptop, 8 GB RAM, 1TB HDD, 38.1 cms (15 inches) FHD Screen, Windows 10, MS Office (15s-gr0011AU) Visit the HP Store" 
                   price={32599} 
                   image="https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_UY218_.jpg"
                   rating={3}/>
                   <Product id="698968798600"
                   title="Muscleblaze Iso-zero Low-carb 100% Whey Protein Isolate (Chocolate, 2 Kg / 4.4 lb)"
                    price="5499" 
                    image="https://m.media-amazon.com/images/I/61YRzGcsleL._AC_UL320_.jpg"
                    rating={4}/>
                   <Product 
                    id="7978729868266"
                   title="Vector X Street Soccer Rubber Moulded Football, Size 5" 
                   price="699"
                    image="https://m.media-amazon.com/images/I/615EoQbGAwS._AC_UL320_.jpg"
                    rating={4}/> 
                </div>
                <div className="home__row">
                    <img className="ads" src="https://i.pinimg.com/originals/f5/0f/67/f50f67731024109dce5703d50c287d0e.jpg"/>
                </div>
                <div className="home__row">
                <Product 
                 id="977868686998"
                 title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
                 price="105999" 
                 image="https://images10.newegg.com/BizIntell/item/24/022/24-022-728/1.jpg"
                 rating={4}/>
                </div>
            </div>
            
        </div>
    )
}

export default Home

import { Stars, Tags, FinalPrice } from '../SubComponents'
import { useState } from 'react';

 
function ProductCard(props){
    // Add to Cart State
    const [cartActive, setCartActive] = useState(true);


    const update = (e) => {
        setCartActive(cartActive => !cartActive);
        console.log(`cart active: ${cartActive}`);
        if(cartActive){
            e.target.classList.add('active');
            props.updateCart((prevCount)=>prevCount+1)
        }
        else{
            e.target.classList.remove('active');
            props.updateCart((prevCount)=>prevCount-1)
        }
    }

    return (
        <div className="card-col col-lg-4 col-md-6">
            <div className="card">
                <div className="card-tags">
                    <Tags key={props.tagsKey} items={props.tags} discount={props.discount}/>
                </div>
                <div className="card-img w-100 text-center">
                    <img className="card-img-top mx-auto" src={props.imgUrl} alt="" />
                </div>
                <div className="card-body">
                    <span className="disabled">Ship to {props.ship}</span>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        <Stars  key={props.starsKey} num={props.stars} /> {props.stars}
                        <span className="mx-3">{props.reviews} reviews</span>
                    </p>
                    <div className="d-flex justify-content-between">
                        <FinalPrice key={props.priceKey} mainPrice={props.price}
                        discount={props.discount}/>
                        <div className="card-icons">
                            <a onClick={update}>
                                <i className="fa-solid fa-cart-shopping main-color-hover"></i>
                            </a>
                            <a>
                                <i className="fa-regular fa-heart main-color-hover"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductCard;

import { FinalPrice } from '../SubComponents'
import Quantity from './Quantity';
import useCount from '../../hooks/useCount';


function CartItem(props) {
    const [quantity, incQuantity, decQuantity] = useCount(1);

    return(
        <div className="col-md-12">
            <div className="cart-item text-center">
                <div className="row">
                    <div className="col-md-1">
                        <span className="cart-item-index">{props.index}</span>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-4 cart-item-img">
                                <img src={props.imgUrl} />
                            </div>
                            <div className="col-md-8 cart-item-head text-md-start">
                                <h5>{props.title}</h5>
                                <span className="disabled">{props.brand}</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-col col-md-2 col-4 align-middle">
                        <b>Discount</b><br />
                        {props.discount}%
                    </div>
                    <div className="item-col col-md-2 col-4">
                        <b>Quantity</b><br />
                        <Quantity incVal={incQuantity} decVal={decQuantity} val={quantity} />
                    </div>
                    <div className="item-col col-md-2 col-4">
                        <b>Total Price</b><br />
                        <FinalPrice mainPrice={props.price*quantity} 
                        discount={props.discount} updatePrice={props.updatePrice} />
                    </div>
                    <div className="item-col col-md-1 col-12">
                        <i className="fa-solid fa-xmark mt-4"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

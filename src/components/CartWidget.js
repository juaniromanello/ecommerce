import './CartWidget.css';
import cartIcon from '../cart-icon.png';

const CartWidget = () => {
    return(
        <div className='CartWidget'>
            <img src={cartIcon} className="cartIcon" alt="cartIcon" />
        </div>
    );
};

export default CartWidget

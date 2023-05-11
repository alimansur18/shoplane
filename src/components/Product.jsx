import { Link } from "react-router-dom"
import HeartButton from "./HeartButton"
import StarRating from "./StarRating"
import { FaShoppingCart } from "react-icons/fa"
import { connect } from "react-redux"
import { addToCart } from '../redux/actions/cart-actions'
import {useDispatch} from 'react-redux'

const Product = (props) => {

    const { id, title, price, description, image, rating, isLoading } = props.data;

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(addToCart(props.data))
      }
    return (
        !isLoading ?
            <div className="col-3" >

                <div className="card " style={{ width: '18rem' }}>
                    <HeartButton productId={props.data} />
                    <Link to={"/products/detail/" + id}>
                        <div style={{ width: 'auto', height: '18rem', display: 'flex', justifyContent: 'center' }}>
                            <img src={image} className="card-top product-image" alt={title} />
                        </div>
                    </Link>
                    <div className="card-body" style={{ display: 'inline-block' }}>
                        <b className="card-title">Brand, </b>
                        <span className="card-text">{title.length > 17 ? `${title.substring(0, 17)}...` : title}</span>
                        <StarRating data={rating} />
                        <h5 className="card-title">
                            <span className="text-secondary small">$</span> {price}</h5>
                        <button onClick={onClickHandler} className="btn btn-primary btn-block"><FaShoppingCart /> Add To Cart</button>
                    </div>
                </div>
            </div>
            : null
    )
}

const mapStateToProps = state => {
    return {
      Carts: state.cartReducer.Carts
    };
  };
  
  export default connect(mapStateToProps)(Product);

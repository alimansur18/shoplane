import { Link } from "react-router-dom"
import HeartButton from "./HeartButton"
import StarRating from "./StarRating"
import { FaShoppingCart } from "react-icons/fa"

const Product = (props) => {

    const { id, title, price, description, image, rating } = props.data
    return (
        <div class="col-3" >
            <div class="card " style={{ width: '18rem' }}>
                <HeartButton productId={id}/>
                <div style={{ width: 'auto', height: '18rem', display: 'flex', justifyContent: 'center' }}>
                    <img src={image} class="card-top product-image" alt={title} />
                </div>
                <div class="card-body" style={{ display: 'inline-block' }}>
                    <b class="card-title">Brand, </b>
                    <span class="card-text">{title.length > 17 ? `${title.substring(0, 17)}...` : title}</span>
                    <StarRating data={rating} />
                    <h5 class="card-title">
                        <span className="text-secondary small">$</span> {price}</h5>
                    <Link to={"/products/detail/"+id} class="btn btn-primary btn-block"><FaShoppingCart /> Add To Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Product;
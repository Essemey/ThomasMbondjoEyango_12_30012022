import '../css/components/FoodInfo.css'
import PropTypes from "prop-types";

/**
 * Create a graphical representation of nutrient
 * @param {Object} props
 * @param {String} props.name - nutrient's name
 * @param {String} props.image - nutrient's image
 * @param {String} props.unity - nutrient's unity
 * @param {Number} props.quantity - nutrient's quantity
 * @returns {React.ReactElement}
 */
export default function FoodInfo({ name, image, unity, quantity }) {


    return <div className="foodInfo">
        <img src={`./images/foodInfo/${image}`} />
        <p>
            <span className="quantity">{`${quantity}${unity}`}</span>
            <span className="name">{name}</span>
        </p>
    </div>
}

FoodInfo.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    unity: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
}
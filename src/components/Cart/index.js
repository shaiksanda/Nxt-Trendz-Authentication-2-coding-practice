// Write your JS code here
import Header from '../Header'
import './index.css'

const Cart = props => {
  console.log(props)
  return (
    <div>
      <Header />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="image"
        />
      </div>
    </div>
  )
}

export default Cart

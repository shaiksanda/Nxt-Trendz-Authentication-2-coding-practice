// Write your JS code here
import Header from '../Header'
import './index.css'

const Products = props => {
  console.log(props)
  return (
    <div>
      <Header />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="image"
        />
      </div>
    </div>
  )
}

export default Products

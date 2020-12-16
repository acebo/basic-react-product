import React, { useRef } from 'react'
import img from '../assets/shoe.png';

const ProductCard = ({ item }) => {
  const card = useRef(null)

  const hello = () => {
    card.current.classList.add('animate')
  }

  const helloOut = () => {
    card.current.classList.remove('animate')
  }

  return (
    <div className={'product-container'}>
      <div className={`product-card ${item.stock === 0 ? 'product-out-of-stock' : ''}`} ref={card} onMouseOver={hello} onMouseLeave={helloOut}>
        <img src={img} alt=""/>
        <div className="add-to-cart-button">Add to Cart</div>
        <div className="stats">
          <div className="stats-container">
            <span className="product_price">${ item.price }</span>
            <span className="product_name">{ item.name }</span>
            <p>{ item.description }</p>

            <div className="product-options">
              <strong>SIZES</strong>
              <span>{ item.sizes.join(', ')}</span>
              <strong>COLORS</strong>
              <div className="colors">
                {
                  item.colors.map(i => (
                    <div key={i} className={`c-${i}`}><span /></div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

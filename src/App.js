import React, { useRef } from 'react'
import './App.css';
import data from './data.json'
import 'antd/dist/antd.css';
import img from './shoe.png';

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

function App() {
  return (
    <div className="App">
      <div className={'app-header'}>
        <div>
          <input type={'radio'} name={'status'} /><span>Select all</span>
          <input type={'radio'} name={'status'} /><span>Only in stock</span>
        </div>
      </div>
      <div className={'app-content'}>
        <div id={'content'}>
          {
            data.map(item => (
              <ProductCard key={item.id} item={item} />
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default App;

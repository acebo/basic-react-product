import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'
import { Radio } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import ProductCard from '../components/ProductCard'
import AddToCartPopup from '../components/AddToCartPopup'

const Product = ({ cartItems, setCartItems }) => {
  const [selectedFilter, setSelectedFilter] = useState('Select all')
  const [addToCartPopupProduct, setAddToCartPopupProduct] = useState(undefined)

  const onFilterChange = (event) => setSelectedFilter(event.target.value)

  let products = data

  if (selectedFilter === 'Only in stock') {
    products = products.filter(product => product.stock !== 0)
  }

  return (
    <>
      <div className={'app-header'}>
        <div className={'header-content'}>
          <Radio.Group
            options={['Select all', 'Only in stock']}
            onChange={onFilterChange}
            value={selectedFilter}
            optionType="button"
            buttonStyle="solid"
          />
          <Link to="/cart">
            <ShoppingCartOutlined style={{ fontSize: '32px', position: 'absolute', right: 10, top: 10 }} />
            <div className={'cart-quantity'}>{cartItems.reduce((acc, cur) => acc += cur.quantity, 0)}</div>
          </Link>
        </div>
      </div>
      <div className={'app-content'}>
        <div id={'content'}>
          {
            products.map(item => (
              <ProductCard key={item.id} item={item} setAddToCartPopupProduct={setAddToCartPopupProduct} />
            ))
          }
        </div>
      </div>
      {
        !!addToCartPopupProduct &&
          <AddToCartPopup
            addToCartPopupProduct={addToCartPopupProduct}
            setAddToCartPopupProduct={setAddToCartPopupProduct}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
      }
    </>
  )
}

export default Product
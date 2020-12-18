import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Radio, Typography } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import ProductCard from '../components/ProductCard'
import AddToCartPopup from '../components/AddToCartPopup'
import Header from '../components/Header'

const { Title } = Typography

const Product = ({ cartItems, setCartItems }) => {
  let [products, setProducts] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Select all')
  const [addToCartPopupProduct, setAddToCartPopupProduct] = useState(undefined)

  const onFilterChange = (event) => setSelectedFilter(event.target.value)

  useEffect(
    () => {
      axios.get('https://basic-react-8c559.web.app/static/data.json')
        .then(({ data }) => setProducts(data.products))
    },
    []
  )

  if (selectedFilter === 'Only in stock') {
    products = products.filter(product => product.stock !== 0)
  }

  return (
    <>
      <Header>
        <Title>Pastel Store</Title>
        <div className="cart-icon">
          <Link to="/cart">
            <ShoppingCartOutlined style={{ fontSize: '32px', position: 'absolute', right: 10, top: 10 }} />
            <div className={'cart-quantity'}>{cartItems.reduce((acc, cur) => acc += cur.quantity, 0)}</div>
          </Link>
        </div>
        <Radio.Group
          options={['Select all', 'Only in stock']}
          onChange={onFilterChange}
          value={selectedFilter}
          optionType="button"
          buttonStyle="solid"
        />
      </Header>
      <div className={'app-content'}>
        <div className={'product-list'}>
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

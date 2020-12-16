import React, { useState } from 'react'
import './App.css';
import data from './data.json'
import 'antd/dist/antd.css';
import { Radio } from 'antd'
import ProductCard from './components/ProductCard'
import AddToCartPopup from './components/AddToCartPopup'

function App() {
  const [selectedFilter, setSelectedFilter] = useState('Select all')
  const [addToCartPopupProduct, setAddToCartPopupProduct] = useState(undefined)

  const onFilterChange = (event) => setSelectedFilter(event.target.value)

  let products = data

  if (selectedFilter === 'Only in stock') {
    products = products.filter(product => product.stock !== 0)
  }

  return (
    <div className="App">
      <div className={'app-header'}>
        <div className={'header-content'}>
          <Radio.Group
            options={['Select all', 'Only in stock']}
            onChange={onFilterChange}
            value={selectedFilter}
            optionType="button"
            buttonStyle="solid"
          />
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
          />
      }
    </div>
  );
}

export default App;

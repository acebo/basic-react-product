import React from 'react'
import './App.css';
import data from './data.json'
import 'antd/dist/antd.css';
import ProductCard from './components/ProductCard'

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

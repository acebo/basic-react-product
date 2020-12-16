import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const Cart = () => {
  return (
    <>
      <div className={'app-header'}>
        <div className={'header-content'}>
          <Title>Cart</Title>
        </div>
      </div>
      <div className={'app-content'}>
        <div id={'content'}>
        </div>
      </div>
    </>
  )
}

export default Cart
import React, { useState } from 'react'
import { Modal, Radio, InputNumber } from 'antd'

const AddToCartPopup = ({ addToCartPopupProduct, setAddToCartPopupProduct, setCartItems, cartItems }) => {
  const [selectedSize, setSelectedSize] = useState(addToCartPopupProduct.sizes[0])
  const [selectedColor, setSelectedColor] = useState(addToCartPopupProduct.colors[0])
  const [quantity, setQuantity] = useState(1)

  const onSizeSelectionChange = (event) => setSelectedSize(event.target.value)
  const onColorSelectionChange = (value) => setSelectedColor(value)
  const onQuantityChange = (value) => {
    setQuantity(value)
  }

  const onOk = () => {
    const cartItem = {
      id: addToCartPopupProduct.id,
      name: addToCartPopupProduct.name,
      description: addToCartPopupProduct.description,
      price: addToCartPopupProduct.price,
      size: selectedSize,
      color: selectedColor,
      quantity
    }

    setCartItems([ ...cartItems, cartItem ])
    setAddToCartPopupProduct(undefined)
  }
  const onCancel = () => {
    setAddToCartPopupProduct(undefined)
  }
  return (
    <Modal
      visible={true}
      title={`Add ${addToCartPopupProduct.name} to cart!`}
      onOk={onOk}
      onCancel={onCancel}
      className={'add-to-cart-options'}
    >
      <strong level={5}>SIZE</strong>
      <div className="field">
        <Radio.Group
          options={addToCartPopupProduct.sizes}
          onChange={onSizeSelectionChange}
          value={selectedSize}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <strong>COLOR</strong>
      <div className="field colors-container">
        <div className="colors">
          {
            addToCartPopupProduct.colors.map(i => (
              <div key={i} className={`c-${i} ${selectedColor === i ? 'selected' : ''}`} onClick={() => onColorSelectionChange(i)}><span /></div>
            ))
          }
        </div>
      </div>
      <strong level={5}>QUANTITY</strong>
      <div className="field">
        <InputNumber min={1} max={addToCartPopupProduct.stock} defaultValue={quantity} onChange={onQuantityChange} />
      </div>
    </Modal>
  )
}

export default AddToCartPopup

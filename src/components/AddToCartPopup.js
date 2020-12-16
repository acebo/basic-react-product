import React, { useState } from 'react'
import { Modal, Radio, Typography, InputNumber } from 'antd'

const { Title, Text } = Typography

const AddToCartPopup = ({ addToCartPopupProduct, setAddToCartPopupProduct, setCartItems, cartItems }) => {
  const [selectedSize, setSelectedSize] = useState(addToCartPopupProduct.sizes[0])
  const [selectedColor, setSelectedColor] = useState(addToCartPopupProduct.colors[0])
  const [quantity, setQuantity] = useState(1)

  const onSizeSelectionChange = (event) => setSelectedSize(event.target.value)
  const onColorSelectionChange = (event) => setSelectedColor(event.target.value)
  const onQuantityChange = (value) => {
    setQuantity(value)
  }

  const onOk = () => {
    const cartItem = {
      id: addToCartPopupProduct.id,
      name: addToCartPopupProduct.name,
      description: addToCartPopupProduct.description,
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
    >
      <Text>{addToCartPopupProduct.description}</Text>
      <Title level={5}>Size</Title>
      <Radio.Group
        options={addToCartPopupProduct.sizes}
        onChange={onSizeSelectionChange}
        value={selectedSize}
        optionType="button"
        buttonStyle="solid"
      />
      <Title level={5}>Color</Title>
      <Radio.Group
        options={addToCartPopupProduct.colors}
        onChange={onColorSelectionChange}
        value={selectedColor}
        optionType="button"
        buttonStyle="solid"
      />
      <Title level={5}>Quantity</Title>
      <InputNumber min={1} max={addToCartPopupProduct.stock} defaultValue={quantity} onChange={onQuantityChange} />
    </Modal>
  )
}

export default AddToCartPopup

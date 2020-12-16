import React from 'react'
import { Typography, Space, Table } from 'antd'

const { Title } = Typography

const Cart = ({ cartItems, setCartItems }) => {
  const onDelete = (record) => {
    setCartItems(cartItems.filter(item => item.id !== record.id))
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle" onClick={() => onDelete(record)}>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className={'app-header'}>
        <div className={'header-content'}>
          <Title>Cart</Title>
        </div>
      </div>
      <div className={'app-content'}>
        <Table columns={columns} dataSource={cartItems} />
      </div>
    </>
  )
}

export default Cart
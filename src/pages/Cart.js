import React from 'react'
import { Typography, Space, Table } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

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
      render: (text, record) => (
        <div className="colors">
          <div key={record.color} className={`c-${record.color}`}><span /></div>
        </div>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price per unit',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => (
        <Space size="middle" onClick={() => onDelete(record)}>
          {record.price} ฿
        </Space>
      ),
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
        <div className={'header-content cart-header'}>
          <Title>
            <ShoppingCartOutlined style={{ fontSize: '36px', marginRight: 10 }} />
            Cart
          </Title>
        </div>
      </div>
      <div className={'app-content'}>
        <Table
          columns={columns}
          dataSource={cartItems}
          pagination={false}
          summary={data => {
            let totalPrice = 0;

            data.forEach(({ price, quantity }) => {
              totalPrice += price * quantity
            });

            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={5}>Total price</Table.Summary.Cell>
                  <Table.Summary.Cell >
                    <Text>{totalPrice} ฿</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </>
            );
          }}
        />
      </div>
    </>
  )
}

export default Cart
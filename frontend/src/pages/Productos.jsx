import React from 'react'
import { Space, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Flex } from 'antd';
import './styles/Producto.css'

function Productos() {
    return (
        <>
            <Flex gap="small" vertical>
                <Flex wrap gap="small">
                    <div className='btn'>
                        <Button type="primary" icon={<PlusOutlined />} iconPosition='start'>
                            Añadir
                        </Button>
                    </div>
                </Flex>
            </Flex>

            <Divider orientation="left" plain>
                Table
            </Divider>

            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default Productos


const columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Categoria',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
        key: 'stock',
    },
    {
        title: 'Precio',
        key: 'precio',
        dataIndex: 'precio'
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'Pantalon jean',
        stock: 32,
        category: 'pantalon',
        precio: 5250,
    }
];



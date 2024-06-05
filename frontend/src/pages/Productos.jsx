import { Space, Table, Input, Button, Divider, Tag, Flex, Pagination, Modal } from 'antd';
import { PlusOutlined, EditOutlined, InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import { IoFilterSharp } from "react-icons/io5";
import { Products } from '../../data';

import './styles/Producto.css'
import { useState } from 'react';
import FormProduct from '../components/From';


const data = Products;


function currencyFormatter(value) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency: 'USD'
    })
    return formatter.format(value)
}

//formato a numeros
data.forEach(element => {
    element.precioCompra = currencyFormatter(element.precioCompra)
    element.precioVenta = currencyFormatter(element.precioVenta)
    element.utilidad = currencyFormatter(element.utilidad)
})



function Productos() {
    const { Search } = Input

    ////////////CONTROLES DEL MODAL/////////////////
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    //////////////////////////////////
    return (
        <>

            <div className='btns'>
                <div className=''>
                    <Button type="primary" icon={<PlusOutlined />} iconPosition='start' onClick={showModal}>
                        Añadir
                    </Button>

                    <Modal
                        title="Agregar Producto"
                        open={open}
                        centered
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="cancel" onClick={handleCancel}>
                                Cancelar
                            </Button>,
                            <Button key="hanbleOk" type='primary' onClick={handleOk}>
                                Guardar
                            </Button>
                            
                        ]}
                    >
                        <Space style={{padding: "8px"}}>
                            <FormProduct/>
                        </Space>
                    </Modal>
                </div>

                <div>
                    <Space>
                        <Search placeholder="Buscar" loading={false} style={{}} />

                        <Button type="text" icon={<IoFilterSharp />} iconPosition='start'>
                            Filtrar
                        </Button>
                    </Space>
                </div>
            </div>


            <Divider orientation="left" plain>
                Productos
            </Divider>

            <Table
                tableLayout='fixed'
                loading='false'
                size='middle'
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
                scroll={{ x: '50vw' }}
                rowSelection={{}}
            />
        </>
    )
}

export default Productos


const columns = [
    Table.SELECTION_COLUMN,
    {
        title: 'Producto',
        dataIndex: 'producto',
        key: 'name',
        fixed: true,
    },
    {
        title: 'Talle',
        dataIndex: 'talle',
        key: 'talle',
        align: 'center',
    },
    {
        title: 'Categoria',
        dataIndex: 'category',
        key: 'category',
        render: (_, { category }) => (
            <>
                <Tag color={category.length > 5 ? 'geekblue' : 'green'} key={category}>
                    {category.toUpperCase()}
                </Tag>
            </>
        )
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
        key: 'stock',
        width: 80,
        align: 'center',
    },
    {
        title: 'Precio Venta($)',
        key: 'precioVenta',
        dataIndex: 'precioVenta',
        align: 'center',
    },
    {
        title: 'Precio Compra($)',
        key: 'precio',
        dataIndex: 'precioCompra',
        align: 'center',
    },
    {
        title: 'Ganancia x Unid($)',
        key: 'precio',
        dataIndex: 'utilidad',
        align: 'center',
    },
    {
        title: 'Unid. Vendida/s',
        key: 'precio',
        dataIndex: 'vendidos',
        align: 'center',
    },
    {
        title: 'Accciones',
        key: 'actions',
        render: () => (
            <Space size="small">
                <Button icon={<EditOutlined />} />
                <Button icon={<InboxOutlined />} />
                <Button icon={<DeleteOutlined />} />
            </Space>
        ),
        fixed: 'right',
        align: 'center',
        width: 150,
    },
]




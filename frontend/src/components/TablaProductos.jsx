import React from "react"
import { Table, Tag, Space, Button, Row, Col } from "antd"
import { EditOutlined, InboxOutlined, DeleteOutlined } from "@ant-design/icons"
import { Products } from "../../data"
import "./styles/TablaProductos.css"
import Search from "antd/es/transfer/search"
import MenuTable from "./MenuTable"

const data = Products

function currencyFormatter(value) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 2,
    currency: "USD",
  })
  return formatter.format(value)
}

//formato a numeros
data.forEach((element) => {
  element.precioCompra = currencyFormatter(element.precioCompra)
  element.precioVenta = currencyFormatter(element.precioVenta)
  element.utilidad = currencyFormatter(element.utilidad)
})

const columns = [
  Table.SELECTION_COLUMN,
  {
    title: "Producto",
    dataIndex: "producto",
    key: "name",
    fixed: true,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Talle",
    dataIndex: "talle",
    key: "talle",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Categoria",
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => a.age - b.age,
    render: (_, { category }) => (
      <>
        <Tag color={category.length > 5 ? "geekblue" : "green"} key={category}>
          {category.toUpperCase()}
        </Tag>
      </>
    ),
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
    //width: 80,
    //defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Venta($)",
    key: "precioVenta",
    dataIndex: "precioVenta",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Compra($)",
    key: "precio",
    dataIndex: "precioCompra",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Ganancia($)",
    key: "precio",
    dataIndex: "utilidad",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Vendida/s",
    key: "precio",
    dataIndex: "vendidos",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Accciones",
    key: "actions",
    sorter: (a, b) => a.age - b.age,
    render: () => (
      <Space size='small'>
        <Button icon={<EditOutlined />} />
        <Button icon={<InboxOutlined />} />
        <Button icon={<DeleteOutlined />} />
      </Space>
    ),
    fixed: "right",
    //width: 150,
  },
]

function TablaProductos() {
  return (
    <>
      <div>
        <Row>
          <Col lg={24} md={24} xs={24}>
            <MenuTable />
          </Col>
        </Row>
        <Row justify='space-between' style={{ margin: "0 20px" }}>
          <Col>
            <Space>
              <Button>Archivar</Button>
              <Button>Imprimir</Button>
              <Button>Borrar</Button>
            </Space>
          </Col>
          <Col>
            <Space>
              <Button>Buscar</Button>
            </Space>
          </Col>
        </Row>
      </div>
      <Table
        tableLayout='fixed'
        loading='false'
        size='large'
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 1300 }}
        rowSelection={{}}
      />
    </>
  )
}

export default TablaProductos

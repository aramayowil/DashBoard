import React from "react"
import { Table, Tag, Space, Button, Row, Col, Flex, Input } from "antd"
import {
  DeleteOutlined,
  PrinterOutlined,
  FolderOpenOutlined,
  SearchOutlined,
} from "@ant-design/icons"
import { FiEdit } from "react-icons/fi"
import { LuFolderDown } from "react-icons/lu"
import { GoTrash } from "react-icons/go"
import { Products } from "../../data"
import "./styles/TablaProductos.css"
import MenuTable from "./TabsTable"

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
    title: "Codigo",
    dataIndex: "key",
    key: "key",
    width: 90,
    fixed: true,
    sorter: (a, b) => a.age - b.age,
  },
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
    width: 80,
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
    width: 90,
    //defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Vendidas",
    key: "precio",
    dataIndex: "vendidos",
    width: 110,
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
    title: "Accciones",
    key: "actions",
    render: () => (
      <Space size='small'>
        <Button type='text' icon={<FiEdit size={17} />} />
        <Button type='text' icon={<LuFolderDown size={17} />} />
        <Button type='text' icon={<GoTrash size={19} />} />
      </Space>
    ),
    fixed: "right",
    width: 150,
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
        <Row justify='space-between' style={{ marginBottom: 24 }}>
          <Col>
            <Flex gap='small' wrap>
              <Button shape='round' icon={<FolderOpenOutlined />}>
                Archivar
              </Button>
              <Button shape='round' icon={<PrinterOutlined />}>
                Imprimir
              </Button>
              <Button shape='round' icon={<DeleteOutlined />}>
                Borrar
              </Button>
            </Flex>
          </Col>
          <Col>
            <Space>
              <Input
                size='middle'
                allowClear
                //width={280}
                prefix={
                  <SearchOutlined
                    style={{
                      color: "rgba(0,0,0,.60)",
                    }}
                  />
                }
                placeholder='Buscar producto o categoria'
              />
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
        showHeader
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20, 50],
          showTotal: (total, range) => `${range[0]}-${range[1]} de ${total} productos`,
        }}
        scroll={{ x: 1300 }}
        rowSelection={{}}
      />
    </>
  )
}

export default TablaProductos

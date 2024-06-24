import React from "react";
import {
  Table,
  Tag,
  Space,
  Button,
  Input,
  Tooltip,
  ConfigProvider,
} from "antd";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const data = [
  { producto: "pantalon de gamusa Dama", cantidad: 0, valor: "$123.123,00" },
  { producto: "pantalon vaquero hombre", cantidad: 0, valor: "$123.123,00" },
  {
    producto: "pollera cargo ; Mujer T/ XXL",
    cantidad: 0,
    valor: "$123.123,00",
  },
  { producto: "pantalon", cantidad: 0, valor: "$123.123,00" },
  { producto: "pantalon", cantidad: 0, valor: "$123.123,00" },
  { producto: "pantalon", cantidad: 0, valor: "$123.123,00" },
  { producto: "pantalon", cantidad: 0, valor: "$123.123,00" },
  { producto: "pantalon", cantidad: 0, valor: "$123.123,00" },
];

const columns = [
  {
    title: "Producto",
    dataIndex: "producto",
    key: "name",
  },
  {
    title: "Cantidad",
    key: "cantidad",
    dataIndex: "cantidad",
    render: () => (
      <Space>
        <Space.Compact>
          <Button size="large" icon={<GrFormSubtract />}></Button>
          <Input
            defaultValue="1"
            size="large"
            style={{ textAlign: "center", width: 48 }}
          />
          <Button size="large" icon={<IoIosAdd size={20} />}></Button>
        </Space.Compact>
      </Space>
    ),
    width: 160,
  },
  {
    title: "Valor",
    key: "valor",
    dataIndex: "valor",
    width: 120,
  },
  {
    title: "Total",
    key: "total",
    dataIndex: "valor",
    width: 120,
  },
  {
    title: "",
    key: "actions",
    dataIndex: "",
    render: () => (
      <Space size="small">
        <Tooltip title="Eliminar">
          <Button type="text" icon={<IoCloseOutline size={24} />} />
        </Tooltip>
      </Space>
    ),
    width: 80,
  },
];

function TablaVenta() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Table: {},
          },
        }}
      >
        <Table
          tableLayout="auto"
          loading="false"
          size="large"
          pagination={false}
          columns={columns}
          dataSource={data}
          showHeader
          scroll={{ y: 280 }}
          //x: 1300
        />
      </ConfigProvider>
    </>
  );
}

export default TablaVenta;

import React, { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  Space,
  TreeSelect,
  Tooltip,
} from "antd";
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
    md: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
    md: { span: 24 },
  },
};

const FormProduct = () => {
  const [stockValue, setStockValue] = useState(0);

  const onChangeStock = (value) => {
    setStockValue(value);
  };

  return (
    <Form
      //{...formItemLayout}
      // variant="filled"
      layout="vertical"
      style={{
        maxWidth: 600,
      }}
    >
      <Space direction="horizontal" size="small">
        <Form.Item label="Codigo" name="key">
          <InputNumber disabled style={{ width: "90%" }} />
        </Form.Item>

        <Form.Item
          label="Producto"
          name="producto"
          hasFeedback
          style={{ width: 300 }}
          rules={[
            {
              required: true,
              message: "Escriba una descripcion",
            },
          ]}
        >
          <Input
            placeholder="Ingrese una descripcion"
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Space>

      <Space direction="horizontal" size="middle">
        <Form.Item
          label="Categoria"
          name="categoria"
          hasFeedback
          //validateStatus="error"
          rules={[
            {
              required: true,
              message: "Seleccione una categoria",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Seleccione una categoria"
            allowClear
            style={{
              width: 220,
            }}
            options={[
              {
                value: "pantalon",
                label: "Pantalon",
              },
              {
                value: "remera",
                label: "Remera",
              },
              {
                value: "camiseta",
                label: "Camiseta",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Genero"
          name="genero"
          hasFeedback
          //validateStatus="success"
          style={{
            width: 200,
          }}
          rules={[
            {
              required: true,
              message: "Seleccione un genero",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Seleccione un genero"
            allowClear
            options={[
              {
                value: "male",
                label: "Hombre",
              },
              {
                value: "female",
                label: "Mujer",
              },
              {
                value: "boy",
                label: "Niño",
              },
              {
                value: "girl",
                label: "Niña",
              },
            ]}
          ></Select>
        </Form.Item>
      </Space>

      <Space direction="horizontal" size="middle">
        <Form.Item
          label="Precio Compra"
          name="precioCompra"
          rules={[
            {
              required: true,
              message: "Ingrese precio",
            },
          ]}
        >
          <InputNumber prefix="$" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Precio Venta"
          name="precioVenta"
          rules={[
            {
              required: true,
              message: "Ingrese precio venta",
            },
          ]}
        >
          <Input prefix="$" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Ganancia" name="ganancia">
          <Input prefix="$" disabled style={{ width: "100%" }} />
        </Form.Item>
      </Space>

      <Form.Item
        label="Talle"
        name="talle"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Talle requerido",
          },
        ]}
        style={{ width: 150 }}
      >
        <Input style={{ width: "100%" }} />
      </Form.Item>

      <Space direction="horizontal" size="middle">
        <Form.Item
          label="Stock"
          name="stock"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Ingrese el stock",
            },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Stock Minimo"
          name="stockMin"
          initialValue={0}
          rules={[
            {
              required: true,
              message: "Ingrese el stock minimo",
            },
          ]}
        >
          <Input
            style={{ width: "100%" }}
            suffix={
              <Tooltip title="Recibirás una alerta cuando el stock baje del numero indicado.">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Space>
    </Form>
  );
};

export default FormProduct;

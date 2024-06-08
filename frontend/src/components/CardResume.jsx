import React from "react"
import {
  Button,
  Divider,
  Col,
  Row,
  Typography,
  Card,
  ConfigProvider,
  Select,
  Form,
} from "antd"

const { Title } = Typography
const { Item } = Form

function CardResume() {
  return (
    <>
      <Form vertical>
        <Item label='Forma de pago' name='formaPago'>
          <Select
            defaultValue='efectivo'
            style={{ width: "100%" }}
            options={[
              { value: "efectivo", label: "Efectivo" },
              { value: "tarjeta", label: "Tarjeta" },
            ]}
          />
        </Item>
      </Form>
    </>
  )
}

export default CardResume

{
  /* <ConfigProvider
theme={{
  components: {
    Card: {},
  },
}}
>
<Card
  title='Resumen de venta'
  bordered={true}
  style={{
    width: 400,
  }}
>
  <Row justify={"start"}>
    <Col xs={24} md={24} lg={24} xl={24}>
      <div style={{ marginBottom: 8 }}>
        <Title style={{ fontSize: 14 }}> Forma de pago</Title>
        <Select
          defaultValue='efectivo'
          style={{ width: "100%" }}
          options={[
            { value: "efectivo", label: "Efectivo" },
            { value: "tarjeta", label: "Tarjeta" },
          ]}
        />
        <Divider />
      </div>
    </Col>
  </Row>
  <Row justify={"space-between"} style={{ marginBottom: 8 }}>
    <Col>Valor de la compra</Col>
    <Col>$297.350,48</Col>
  </Row>
  <Row justify={"space-between"} style={{ marginBottom: 8 }}>
    <Col>Descuentos</Col>
    <Col>-$0</Col>
  </Row>
  <Row justify={"space-between"} style={{ marginBottom: 8 }}>
    <Col>Subtotal</Col>
    <Col>$297.350,48</Col>
  </Row>
  <Row justify={"center"} style={{ textAlign: "center" }}>
    <Col xs={24} md={24} lg={24} xl={24}>
      <Title level={4}>Total: $ 297.350,48</Title>
      <Divider />
      <Button style={{ width: "100%" }}>FINALIZAR COMPRA</Button>
    </Col>
  </Row>
</Card>
</ConfigProvider> */
}

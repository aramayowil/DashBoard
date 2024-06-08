import React, { useState } from "react"
import { Col, Row, Input, Typography } from "antd"

import TablaProductos from "../components/TablaProductos"
import CardResumen from "../components/CardResume"

const { Title } = Typography

function Venta() {
  return (
    <>
      <Row justify={"start"}>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Title level={2}>Regitrar venta</Title>
          <Input placeholder='Ingrese nombre o código del producto' allowClear />
          <TablaProductos />
        </Col>

        <Col xs={24} md={12} lg={12} xl={12}>
          <CardResumen />
        </Col>
      </Row>
    </>
  )
}

export default Venta

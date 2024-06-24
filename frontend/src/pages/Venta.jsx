import React, { useState } from "react";
import { Col, Row, Input, Typography, Button } from "antd";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import CardResumen from "../components/CardResume";
import TablaVenta from "../components/TablaVenta";
import { Products } from "../../data";

const { Title } = Typography;

function Venta() {
  return (
    <>
      <Row justify={"space-evenly"} align={"stretch"}>
        <Col xs={24} sm={24} md={16} lg={16}>
          <Row justify={"space-between"} style={{ marginBottom: 16 }}>
            <Col>
              <Title level={2} style={{ margin: "0" }}>
                Registrar venta
              </Title>
            </Col>
            <Col>
              <Button
                style={{ color: "red" }}
                icon={<FiShoppingCart size={14} />}
              >
                Vaciar
              </Button>
            </Col>
          </Row>
          <Input
            prefix={<IoIosSearch />}
            placeholder="Ingrese nombre o código del producto"
            allowClear
            style={{ marginBottom: 16 }}
          />
          <TablaVenta />
        </Col>

        <Col xs={20} sm={18} md={8} lg={7}>
          <div style={{ padding: "16px", marginTop: 16 }}>
            <CardResumen />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Venta;

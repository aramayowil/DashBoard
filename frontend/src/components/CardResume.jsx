import React from "react";
import {
  Button,
  Divider,
  Col,
  Row,
  Typography,
  Card,
  ConfigProvider,
  Select,
  Input,
  Form,
} from "antd";

const { Title } = Typography;

function CardResume() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Card: {},
          },
        }}
      >
        <Card
          title="Resumen de venta"
          bordered={true}
          style={{ width: "100%" }}
        >
          <Row justify={"start"}>
            <Col xs={24} md={24} lg={24} xl={24}>
              <div style={{ marginBottom: 8 }}>
                <Title style={{ fontSize: 14 }}> Forma de pago</Title>
                <Select
                  defaultValue="efectivo"
                  style={{ width: "100%" }}
                  options={[
                    { value: "efectivo", label: "Efectivo" },
                    { value: "tarjeta", label: "Tarjeta" },
                  ]}
                />
              </div>
            </Col>
          </Row>
          <Row justify={"start"} style={{ gap: 9 }}>
            <Col span={5}>
              <Typography.Title style={{ fontSize: 14 }}>
                Serie
              </Typography.Title>
              <Input variant="filled" disabled defaultValue="001"></Input>
            </Col>
            <Col span={12}>
              <Typography.Title style={{ fontSize: 14 }}>
                Nro Factura
              </Typography.Title>
              <Input variant="filled" disabled defaultValue="00001231"></Input>
            </Col>
          </Row>

          <Divider />

          <Row style={{ marginBottom: 8 }}>
            <Col span={12}>Valor de la compra</Col>
            <Col span={12} style={{ textAlign: "end" }}>
              $297.350,48
            </Col>
          </Row>
          <Row style={{ marginBottom: 8 }}>
            <Col span={12}>Descuentos</Col>
            <Col span={12} style={{ textAlign: "end" }}>
              -$0
            </Col>
          </Row>

          <Row style={{ marginBottom: 8 }}>
            <Col span={12}>Subtotal</Col>
            <Col span={12} style={{ textAlign: "end" }}>
              $297.350,48
            </Col>
          </Row>

          <Row justify={"center"} style={{ textAlign: "center" }}>
            <Col xs={24} md={24} lg={24} xl={24}>
              <Title level={4}>Total: $ 297.350,48</Title>
              <Divider />
              <Button type="primary" style={{ width: "100%" }}>
                FINALIZAR COMPRA
              </Button>
            </Col>
          </Row>
        </Card>
      </ConfigProvider>
    </>
  );
}

export default CardResume;

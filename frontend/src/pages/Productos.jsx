import { useState } from "react"
import { Space, Input, Button, Divider, Modal, Row, Col, ConfigProvider } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { IoFilterSharp } from "react-icons/io5"
import FormProduct from "../components/From"
import TablaProductos from "../components/TablaProductos"
import "./styles/Producto.css"

function Productos() {
  const { Search } = Input

  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const handleCancel = () => {
    console.log("Clicked cancel button")
    setOpen(false)
  }

  return (
    <>
      <div className=''>
        <Row>
          <Col>
            <Button
              type='primary'
              icon={<PlusOutlined />}
              iconPosition='start'
              size='middle'
              onClick={showModal}
            >
              Añadir
            </Button>

            <Modal
              title='Agregar Producto'
              open={open}
              centered
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              footer={[
                <Button key='cancel' onClick={handleCancel}>
                  Cancelar
                </Button>,
                <Button key='hanbleOk' type='primary' onClick={handleOk}>
                  Guardar
                </Button>,
              ]}
            >
              <Space style={{ padding: "8px" }}>
                <FormProduct />
              </Space>
            </Modal>
          </Col>
        </Row>
      </div>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#EDF3F9",
            },
          },
        }}
      >
        <TablaProductos />
      </ConfigProvider>
    </>
  )
}

export default Productos

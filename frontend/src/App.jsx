import React, { useState } from "react"
import { MenuOutlined } from "@ant-design/icons"
import { Layout, theme, Button, Row, Col, Space, Drawer, Grid } from "antd"
import MenuList from "./components/MenuList"
import LogoSideBar from "./components/LogoSideBar"
import MyRoutes from "./routers/routes"
import AvatarProfile from "./components/AvatarProfile"

import "./App.css"

const { Header, Content, Sider } = Layout
const { useBreakpoint } = Grid

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const screens = useBreakpoint()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header
        style={{
          padding: "0px 16px",
        }}
      >
        <Row justify='space-between'>
          <Col>
            <Space>
              <Button
                type='default'
                onClick={showDrawer}
                icon={<MenuOutlined style={{ fontSize: "20px" }} />}
                className='btn-collapse-menu'
              />

              <Drawer
                open={open}
                onClose={onClose}
                width={300}
                placement='left'
                closable={false}
                className='drawer'
                style={{
                  background: "rgb(0, 21, 41)",
                }}
              >
                <Space size='small'>
                  <Button
                    type='default'
                    onClick={onClose}
                    icon={<MenuOutlined style={{ fontSize: "20px" }} />}
                    className='btn-collapse-menu'
                    style={{ marginLeft: "16px" }}
                  />
                  <LogoSideBar />
                </Space>

                <MenuList />
              </Drawer>

              <LogoSideBar />
            </Space>
          </Col>

          <Col>
            <AvatarProfile />
          </Col>
        </Row>
      </Header>

      <Layout>
        <Sider
          collapsed={true}
          width={230}
          style={{
            background: "rgb(0, 21, 41)",
            overflow: "auto",
            display: screens.sm === true ? "block" : "none",
          }}
        >
          <MenuList collapsed={true} />
        </Sider>

        <Layout
          style={{
            padding: "0 0px 0px",
          }}
        >
          <Content
            style={{
              overflow: "initial",
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MyRoutes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default App

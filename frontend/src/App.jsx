import { React, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, SunFilled, MoonFilled } from '@ant-design/icons'
import { Button, ConfigProvider, Layout, theme } from 'antd'
import './App.css'
import MenuList from './components/MenuList'
import LogoSideBar from './components/LogoSideBar'
import MyRoutes from './routers/routes'
import { FormProvider } from 'antd/es/form/context'

const { Header, Content, Sider, Footer } = Layout

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  return (
    <>
      <Layout hasSider>

        <Sider className='sidebar' theme='dark'
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <LogoSideBar />
          <MenuList />
        </Sider>

        <Layout style={{ marginLeft: 200 }}>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              borderBlockEnd: '1px solid #837f7f'
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <SunFilled /> : <MoonFilled />}
              className='icon-theme'
            />
          </Header>

          <Content
            style={{
              margin: '0px 0px 0',
              padding: 24,
              overflow: 'initial',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MyRoutes />

          </Content>

        </Layout>
      </Layout >
    </>
  )
}

export default App

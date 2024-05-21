import { React, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined, SunFilled, MoonFilled } from '@ant-design/icons'
import { Button, Flex, Layout, theme } from 'antd'
import './App.css'
import MenuList from './components/MenuList'
import LogoSideBar from './components/LogoSideBar'
import MyRoutes from './routers/routes'

const { Header, Content, Sider } = Layout

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider className='sidebar' trigger={null} collapsible collapsed={collapsed} theme='light'>
          <LogoSideBar />
          <MenuList />
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, display: Flex, position: 'relative' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '16px', width: 64, height: 64, }}
            />
            <Button
              type="text"
              icon={collapsed ? <SunFilled /> : <MoonFilled />}
              className='icon-theme'
            />
          </Header>

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MyRoutes />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
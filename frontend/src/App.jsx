import { React, useState } from 'react'
import { SunFilled, MoonFilled } from '@ant-design/icons'
import { Button, Layout, theme,Breadcrumb} from 'antd'
import './App.css'
import MenuList from './components/MenuList'
import LogoSideBar from './components/LogoSideBar'
import MyRoutes from './routers/routes'


const { Header, Content, Footer, Sider } = Layout;


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <LogoSideBar />
          <MenuList />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
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
            // margin: '0 16px',
            margin: '0 8px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MyRoutes />
          </div>
        </Content>
        
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;

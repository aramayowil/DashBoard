import React, { useState } from "react"
import { Badge, Tabs } from "antd"

const items = [
  {
    label: "Todos",
    key: "all",
    // icon: <MailOutlined />,
  },
  {
    label: "Recientes",
    key: "recent",
    // icon: <MailOutlined />,
  },
  {
    label: "Archivados",
    key: "archived",
    //icon: <AppstoreOutlined />,
  },
  {
    label: "Alertas",
    key: "alerts",
    //icon: <SettingOutlined />,
  },
]

const TabsTable = () => {
  const onChange = (key) => {
    console.log(key)
  }

  return <Tabs defaultActiveKey='all' items={items} onChange={onChange} />
}
export default TabsTable

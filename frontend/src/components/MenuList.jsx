import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { Divider, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles/MenuList.css";

function MenuList({ collapsed }) {
  const items = [
    {
      key: "dashboard",
      icon: <MdDashboard style={{ fontSize: "18px" }} />,
      label: "Dashboard",
      children: [
        {
          key: "dashboard-balance",
          label: "Balance",
          type: "group",
          children: [
            {
              key: "dashboard-balance-day",
              label: "Diario",
            },
            {
              key: "dashboard-balance-week",
              label: "Semanal",
            },
            {
              key: "dashboard-balance-month",
              label: "Mensual",
            },
          ],
        },
      ],
    },
    {
      key: "sale",
      icon: (
        <FaShoppingCart className='icon-sidebar-collapsed' style={{ fontSize: "18px" }} />
      ),
      label: "Ventas",
    },
    {
      key: "stock",
      icon: <FaBoxes style={{ fontSize: "18px" }} />,
      label: "Stock",
    },
    {
      key: "change",
      icon: <MdChangeCircle style={{ fontSize: "20px" }} />,
      label: "Cambios",
    },
    {
      key: "bills",
      icon: <FaMoneyBillAlt style={{ fontSize: "20px" }} />,
      label: "Gastos",
      children: [
        {
          key: "5-1",
          label: "Salarios",
        },
        {
          key: "5-2",
          label: "Retiros",
        },
      ],
    },
    {
      key: "admin",
      label: collapsed ? (
        <Divider style={{ background: "rgb(166,173,180)" }} />
      ) : (
        "Administrar"
      ),
      type: "group",
      children: [
        {
          key: "admin-product",
          label: "Productos",
          icon: <AiFillProduct style={{ fontSize: "20px" }} />,
        },
        {
          key: "admin-devoluciones",
          label: "Devoluciones",
          icon: <TbTruckReturn style={{ fontSize: "21px" }} />,
        },
        {
          key: "admin-users",
          label: "Usuarios",
          icon: <FaUserGear style={{ fontSize: "19px" }} />,
        },
      ],
    },
    {
      key: "sub6",
      icon: <IoSettingsSharp style={{ fontSize: "18px" }} />,
      label: "Ajustes",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={["sale"]}
        className='menuList'
        items={items}
        onClick={({ key }) => {
          navigate("/" + key);
        }}
      />
    </>
  );
}

export default MenuList;

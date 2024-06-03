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
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

const items = [
    {
        key: 'dashboard',
        icon: <MdDashboard />,
        label: 'Dashboard',
        children: [
            {
                key: 'dashboard-balance',
                label: 'Balance',
                type: 'group',
                children: [
                    {
                        key: 'dashboard-balance-day',
                        label: 'Diario',
                    },
                    {
                        key: 'dashboard-balance-week',
                        label: 'Semanal',
                    },
                    {
                        key: 'dashboard-balance-month',
                        label: 'Mensual',
                    },
                ],
            }
        ],
    },
    {
        key: 'sale',
        icon: <FaShoppingCart />,
        label: 'Ventas'
    },
    {
        key: 'stock',
        icon: <FaBoxes />,
        label: 'Stock'
    },
    {
        key: 'change',
        icon: <MdChangeCircle />,
        label: 'Cambios'
    },
    {
        key: 'bills',
        icon: <FaMoneyBillAlt />,
        label: 'Gastos',
        children: [
            {
                key: '5-1',
                label: 'Salarios',
            },
            {
                key: '5-2',
                label: 'Retiros',
            },


        ],
    },
    {
        key: 'admin',
        label: 'Administar',
        type: 'group',
        children: [
            {
                key: 'admin-product',
                label: 'Productos',
                icon: <AiFillProduct />
            },
            {
                key: 'admin-devoluciones',
                label: 'Devoluciones',
                icon: <TbTruckReturn />
            },
            {
                key: 'admin-users',
                label: 'Usuarios',
                icon: <FaUserGear />
            }

        ]
    },
    {
        key: 'sub6',
        icon: <IoSettingsSharp />,
        label: 'Ajustes'
    },
]

function MenuList() {
    const navigate = useNavigate()
    return (
        <>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['sale']}
                items={items}
                onClick={({ key }) => {
                    navigate('/' + key)
                }}
            />
        </>
    )
}

export default MenuList
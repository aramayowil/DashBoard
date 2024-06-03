import React, { useState } from 'react'
import { Button, Divider, Input, Modal, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

function Venta() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [openModalConfirm, setOpenModalConfirm] = useState(false)

    const showModal = () => {
        setOpen(true);
    };

    const showModalConfirm = () => {
        setOpenModalConfirm(true)
    }

    const hideAllModal = () => {
        setOpen(false)
        setOpenModalConfirm(false)
    }
    const hideModalConfirm = () => {
        setOpenModalConfirm(false)
    }

    const submitOK = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const cancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} icon={<PlusOutlined />} iconPosition='start'>
                Agregar Venta
            </Button>
            <Modal
                open={open}
                title="CREAR NUEVA VENTA"
                onOk={cancel}
                onCancel={showModalConfirm}
                footer={[
                    <Button key="back" onClick={cancel}>
                        Cancelar
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={submitOK}>
                        Agregar
                    </Button>

                ]}
            >
                {/* Cotenido del Modal principal */}
                <div style={{ marginTop: '1.5rem' }}>
                    <Space direction='vertical' style={{ width: '75%' }}>
                        <Input status='error' placeholder='Error' />
                    </Space>
                </div>
            </Modal>


            {/* //mejorar modal de confirmacion - arreglar error: cuando se submisa el modal principal se puede cancelar */}
            {/* <Modal
                open={openModalConfirm}
                title="¿Estas seguro?"
                footer={[
                    <Button key="back" onClick={hideModalConfirm}>
                        Volver
                    </Button>,
                    <Button key="submit" type="primary" onClick={hideAllModal}>
                        Salir
                    </Button>

                ]}

            >

            </Modal> */}

            <Divider orientation="left" plain />


        </>
    )
}

export default Venta

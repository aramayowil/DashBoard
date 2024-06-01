import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
const { Option } = Select;


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
}

const FormProduct = () => {

    const [form] = Form.useForm();

    return (
        <Form
            {...layout}
            form={form}
            name="control-hooks"
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item
                name="product"
                label="Nombre"
                rules={[{ required: true, },]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Genero"
                rules={[{ required: true, },]}
            >
                <Select
                    placeholder="Eliga una opcion"
                    allowClear
                >
                    <Option value="boy">Niño</Option>
                    <Option value="girl">Niña</Option>
                    <Option value="woman">Mujer</Option>
                    <Option value="man">Hombre</Option>
                </Select>
            </Form.Item>

        </Form>
    );
};
export default FormProduct;
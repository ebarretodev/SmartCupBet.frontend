import React from "react"
import { Button, Divider, Form, Input, Modal, Radio, Typography } from "antd"

const { Text } = Typography

const FormBet = (props) => {
    const [form] = Form.useForm()

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            form.resetFields()
            props.setVisible(false)
        })
    }

    const handleCancel = () => {
        form.resetFields()
        props.setVisible(false)
    }

    return (
        <Modal
            visible={props.visible}
            title={`Match n# ${props.record.match}`}
            okText="Submit"
            cancelText="Cancel"
            onCancel={handleCancel}
            onOk={handleSubmit}
        >
            <Text> This is the information to make a bet for match n# {props.record.match}.</Text>
            <Divider />
            <Form form={form} layout="vertical" name="form_in_modal"></Form>
        </Modal>
    )
}

export default FormBet

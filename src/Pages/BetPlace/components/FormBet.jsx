import React from 'react';
import { Button, Divider, Form, Input, Modal, Radio, Typography } from 'antd';

const { Text } = Typography;

const FormBet = (props) => {
	const [form] = Form.useForm();

	const handleSubmit = () => {
		form.validateFields().then((values) => {
			form.resetFields();
			props.setVisible(false);
		});
	};

	const handleCancel = () => {
		form.resetFields();
		props.setVisible(false);
	};

	return (
		<Modal
			visible={props.visible}
			title={`Match n# ${props.record.match}`}
			okText='Submit'
			cancelText='Cancel'
			onCancel={handleCancel}
			onOk={handleSubmit}
		>
			<Text>
				{props.record.match}
			</Text>
			<Divider />
			<Form form={form} layout='vertical' name='form_in_modal'>
				<Form.Item
					name='design'
					label='What is your opinion about the CarIOTA design?'
					rules={[
						{
							required: true,
							message: 'Please select one option!',
						},
					]}
				>
					<Radio.Group>
						<Radio value='Good enough'>Good enough</Radio>
						<Radio value='Very good'>Very good</Radio>
						<Radio value='Need improvements'>
							Need improvements
						</Radio>
					</Radio.Group>
				</Form.Item>
				
			</Form>
		</Modal>
	);
};

export default FormBet;

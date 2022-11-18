import { Form, Input, Modal } from 'antd';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider';

const AddMemberModal = () => {
    const {
        isOpenAddMemberModal,
        setIsOpenAddMemberModal,
    } = useContext(AppContext);

    const [form] = Form.useForm();

    const handleSubmit = () => {
        setIsOpenAddMemberModal(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsOpenAddMemberModal(false);
    };

    return (
        <Modal
            open={isOpenAddMemberModal}
            title="Add new member"
            onOk={handleSubmit}
            onCancel={handleCancel}
        >
            <Form
                size="large"
                layout="vertical"
                form={form}
            >
                <Form.Item
                    label="Member's name:"
                    name="name"
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddMemberModal;

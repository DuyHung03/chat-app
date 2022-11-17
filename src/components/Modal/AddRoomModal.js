import { Form, Input, Modal } from 'antd';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/service';

const AddRoomModal = () => {
    const { isOpenModal, setIsOpenModal } =
        useContext(AppContext);

    const {
        user: { uid },
    } = useContext(AuthContext);

    const [form] = Form.useForm();

    const handleSubmit = () => {
        console.log(form);
        addDocument('rooms', {
            ...form.getFieldValue(),
            members: [uid],
        });
        form.resetFields();
        setIsOpenModal(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsOpenModal(false);
    };

    return (
        <Modal
            open={isOpenModal}
            title="Add new room"
            onOk={handleSubmit}
            onCancel={handleCancel}
        >
            <Form
                size="large"
                layout="vertical"
                form={form}
            >
                <Form.Item label="Room Name:" name="name">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Discription:"
                    name="discription"
                >
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddRoomModal;

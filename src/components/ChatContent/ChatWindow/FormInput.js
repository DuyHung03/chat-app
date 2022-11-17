import { Button, Input } from 'antd';
import React from 'react';

const FormInput = () => {
    return (
        <Input.Group
            size="large"
            style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
            }}
        >
            <Input />
            <Button type="primary" size="large">
                Send
            </Button>
        </Input.Group>
    );
};

export default FormInput;

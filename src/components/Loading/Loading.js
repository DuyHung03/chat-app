import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';

function Loading() {
    const antIcon = (
        <LoadingOutlined style={{ fontSize: 80 }} spin />
    );
    return (
        <Spin
            indicator={antIcon}
            style={{
                margin: ' 0',
                position: ' absolute',
                top: ' 40%',
                left: ' 50%',
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
}

export default Loading;

import React from 'react';

import Sidebar from '../../components/Sidebar';
import ChatContent from '../../components/ChatContent';
import { Col, Row } from 'antd';

function ChatLayout() {
    return (
        <Row
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <Col span={6}>
                <Sidebar />
            </Col>
            <Col span={18}>
                <ChatContent />
            </Col>
        </Row>
    );
}

export default ChatLayout;

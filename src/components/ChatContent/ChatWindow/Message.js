import { Avatar, Col, Row, Typography } from 'antd';
import React from 'react';

function Message({ children }) {
    return (
        <Row>
            <Col>
                <Avatar>A</Avatar>
            </Col>
            <Col>
                <Row
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Typography>Hung</Typography>
                        <Typography>12:12:1221</Typography>
                    </Col>
                    <Col>
                        <Typography>{children}</Typography>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Message;

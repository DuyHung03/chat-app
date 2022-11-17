import { Col, Row } from 'antd';
import React from 'react';
import classNames from 'classnames/bind';

import styles from './ChatWindow.module.scss';
import Message from './Message';
import FormInput from './FormInput';

const cx = classNames.bind(styles);

function ChatWindow() {
    return (
        <Row className={cx('wrapper')}>
            <Col className={cx('message')}>
                <Message>y</Message>
                <Message>x</Message>
            </Col>
            <Col className={cx('input')}>
                <FormInput />
            </Col>
        </Row>
    );
}

export default ChatWindow;

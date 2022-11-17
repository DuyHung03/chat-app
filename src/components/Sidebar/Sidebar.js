import { Col, Row } from 'antd';
import React from 'react';
import RoomList from './RoomList/RoomList';
import UserInfo from './UserInfo/UserInfo';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <Row className={cx('wrapper')}>
            <Col>
                <UserInfo />
            </Col>
            <Col>
                <RoomList />
            </Col>
        </Row>
    );
}

export default Sidebar;

import { Avatar, Button, Col, Row, Tooltip } from 'antd';
import classNames from 'classnames/bind';
import { UserAddOutlined } from '@ant-design/icons';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <Row className={cx('wrapper')}>
            <Col>
                <h4 className={cx('name')}>1</h4>
                <p className={cx('discription')}>1</p>
            </Col>
            <Col className={cx('user')}>
                <Button
                    type="primary"
                    icon={<UserAddOutlined />}
                >
                    Add member
                </Button>
                <Avatar.Group maxCount={2}>
                    <Avatar>A</Avatar>
                    <Avatar>A</Avatar>
                    <Tooltip>
                        <Avatar>B</Avatar>
                    </Tooltip>
                </Avatar.Group>
            </Col>
        </Row>
    );
}

export default Header;

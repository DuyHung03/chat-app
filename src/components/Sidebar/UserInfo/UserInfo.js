import { Avatar, Button, Col, Row, Typography } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';

import styles from './UserInfo.module.scss';
import { AuthContext } from '../../../Context/AuthProvider';
import { useContext } from 'react';
import { auth } from '../../../firebase/firebaseConfig';

const cx = classNames.bind(styles);

function UserInfo() {
    const handleLogOut = () => {
        auth.signOut();
    };

    const {
        user: { displayName, photoURL },
    } = useContext(AuthContext);

    return (
        <Row className={cx('wrapper')}>
            <Col className={cx('info')}>
                <Avatar
                    src={photoURL}
                    className={cx('avatar')}
                >
                    {photoURL
                        ? ''
                        : displayName.toUpperCase()}
                </Avatar>
                <Typography className={cx('username')}>
                    {displayName}
                </Typography>
            </Col>
            <Col>
                <Button
                    icon={<PoweroffOutlined />}
                    onClick={handleLogOut}
                >
                    Log out
                </Button>
            </Col>
        </Row>
    );
}

export default UserInfo;

import { Avatar, Button, Col, Row, Tooltip } from 'antd';
import classNames from 'classnames/bind';
import { UserAddOutlined } from '@ant-design/icons';
import { useContext, useMemo } from 'react';

import styles from './Header.module.scss';
import { AppContext } from '../../../Context/AppProvider';

const cx = classNames.bind(styles);

function Header() {
    const {
        isOpenAddMemberModal,
        setIsOpenAddMemberModal,
        selectedRoomId,
        rooms,
    } = useContext(AppContext);

    const selectedRoom = useMemo(
        () =>
            rooms.find(
                (room) => room.id === selectedRoomId,
            ) || {},
        [rooms, selectedRoomId],
    );

    return (
        <Row className={cx('wrapper')}>
            <Col>
                <h4 className={cx('name')}>
                    {selectedRoom.name}
                </h4>
                <p className={cx('discription')}>
                    {selectedRoom.discription}
                </p>
            </Col>
            <Col className={cx('user')}>
                <Button
                    type="primary"
                    icon={<UserAddOutlined />}
                    onClick={() => {
                        setIsOpenAddMemberModal(true);
                        console.log(isOpenAddMemberModal);
                    }}
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

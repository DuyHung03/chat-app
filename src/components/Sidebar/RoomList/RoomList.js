import { Button, Collapse, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './RoomList.module.scss';
import { AppContext } from '../../../Context/AppProvider';

const cx = classNames.bind(styles);

const { Panel } = Collapse;

function RoomList() {
    const {
        rooms,
        setIsOpenAddRoomModal,
        setSelectedRoomId,
    } = useContext(AppContext);

    return (
        <div style={{ padding: '8px 16px' }}>
            <Collapse
                ghost
                style={{ paddingBottom: '16px' }}
            >
                <Panel
                    header="Room List"
                    className={cx('wrapper')}
                >
                    {rooms.map((room) => (
                        <Typography
                            className={cx('room')}
                            key={room.id}
                            onClick={() => {
                                setSelectedRoomId(room.id);
                            }}
                        >
                            {room.name}
                        </Typography>
                    ))}
                </Panel>
            </Collapse>
            <Button
                type="primary"
                icon={<PlusOutlined />}
                className={cx('add-room-btn')}
                onClick={() => {
                    setIsOpenAddRoomModal(true);
                }}
            >
                Add new room
            </Button>
        </div>
    );
}

export default RoomList;

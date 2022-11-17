import { Button, Collapse, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useContext, useMemo } from 'react';
import classNames from 'classnames/bind';

import styles from './RoomList.module.scss';
import useFirestore from '../../../hooks/useFirestore';
import { AuthContext } from '../../../Context/AuthProvider';
import { AppContext } from '../../../Context/AppProvider';

const cx = classNames.bind(styles);

const { Panel } = Collapse;

function RoomList() {
    const {
        user: { uid },
    } = useContext(AuthContext);

    const { setIsOpenModal } = useContext(AppContext);

    const roomsRef = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        };
    }, [uid]);
    const rooms = useFirestore('rooms', roomsRef);
    console.log(rooms);
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
                    setIsOpenModal(true);
                }}
            >
                Add new room
            </Button>
        </div>
    );
}

export default RoomList;

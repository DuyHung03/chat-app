import React from 'react';
import classNames from 'classnames/bind';
import {
    FacebookAuthProvider,
    getAdditionalUserInfo,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import styles from '../LogIn/LogIn.module.scss';
import { Row, Button, Typography, Col } from 'antd';

import { auth } from '../../firebase/firebaseConfig';
import { addDocument } from '../../firebase/service';

const cx = classNames.bind(styles);

const ggProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

function LogIn() {
    const handleGgLogin = async () => {
        const result = await signInWithPopup(
            auth,
            ggProvider,
        );
        console.log(result.user);
        const { isNewUser } = getAdditionalUserInfo(result);
        console.log(isNewUser);
        if (isNewUser) {
            addDocument('users', {
                displayName: result.user.displayName,
                uid: result.user.uid,
                photoURL: result.user.photoURL,
                email: result.user.email,
                providerId:
                    result.user.providerData[0].providerId,
            });
        }
    };

    const handleFbLogin = async () => {
        const result = await signInWithPopup(
            auth,
            fbProvider,
        );
        console.log(result.user);
        const { isNewUser } = getAdditionalUserInfo(result);
        console.log(isNewUser);
        if (isNewUser) {
            addDocument('users', {
                displayName: result.user.displayName,
                uid: result.user.uid,
                photoURL: result.user.photoURL,
                email: result.user.email,
                providerId:
                    result.user.providerData[0].providerId,
            });
        }
    };

    return (
        <Row justify="center">
            <Col span={8}>
                <Typography className={cx('title')}>
                    Fun Chat
                </Typography>
                <Button
                    className={cx('button')}
                    onClick={handleGgLogin}
                >
                    Log in by Google
                </Button>
                <Button
                    className={cx('button')}
                    onClick={handleFbLogin}
                >
                    Log in by Facebook
                </Button>
            </Col>
        </Row>
    );
}

export default LogIn;

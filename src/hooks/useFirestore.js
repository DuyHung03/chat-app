import { useEffect, useState } from 'react';
import {
    collection,
    onSnapshot,
    query,
    where,
} from 'firebase/firestore';

import { db } from '../firebase/firebaseConfig';
const useFirestore = (field, condition) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        let collectionRef = collection(db, field);

        if (condition) {
            if (!condition.compareValue) {
                setDatas([]);
                return;
            }
            collectionRef = query(
                collectionRef,
                where(
                    condition.fieldName,
                    condition.operator,
                    condition.compareValue,
                ),
            );
        }

        const unsubcribed = onSnapshot(
            collectionRef,
            (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setDatas(data);
            },
        );

        return unsubcribed;
    }, [field, condition]);
    return datas;
};

export default useFirestore;

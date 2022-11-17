import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const addDocument = async (field, data) => {
    const docRef = await addDoc(collection(db, field), {
        ...data,
    });
    console.log(docRef.id);
};

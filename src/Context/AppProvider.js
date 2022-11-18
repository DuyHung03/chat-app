import React, {
    useContext,
    useMemo,
    useState,
} from 'react';
import useFirestore from '../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();

function AppProvider({ children }) {
    const [isOpenAddRoomModal, setIsOpenAddRoomModal] =
        useState(false);
    const [isOpenAddMemberModal, setIsOpenAddMemberModal] =
        useState(false);

    const [selectedRoomId, setSelectedRoomId] =
        useState('');

    const {
        user: { uid },
    } = useContext(AuthContext);

    const roomsRef = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        };
    }, [uid]);

    const rooms = useFirestore('rooms', roomsRef);

    return (
        <AppContext.Provider
            value={{
                rooms,
                isOpenAddRoomModal,
                isOpenAddMemberModal,
                selectedRoomId,
                setIsOpenAddRoomModal,
                setIsOpenAddMemberModal,
                setSelectedRoomId,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../components/Loading/Loading';
import { auth } from '../firebase/firebaseConfig';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    setIsLoading(false);
                    setUser(user);
                    navigate('/');
                } else {
                    navigate('/login');
                    setIsLoading(false);
                }
            },
        );

        return unsubcribed;
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Loading /> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

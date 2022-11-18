import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LogInLayout from './Layout/LogInLayout';
import ChatLayout from './Layout/ChatLayout';
import AuthProvider from './Context/AuthProvider';
import AddRoomModal from './components/Modal/AddRoomModal';
import AppProvider from './Context/AppProvider';
import AddMemberModal from './components/Modal/AddMemberModal';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <AppProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={<ChatLayout />}
                        />
                        <Route
                            path="/login"
                            element={<LogInLayout />}
                        />
                    </Routes>
                    <AddRoomModal />
                    <AddMemberModal />
                </AppProvider>
            </AuthProvider>
        </div>
    );
}

export default App;

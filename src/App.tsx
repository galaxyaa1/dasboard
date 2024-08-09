import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';


const App: React.FC = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <AppRoutes />
            </div>
        </div>
    );
};

export default App;

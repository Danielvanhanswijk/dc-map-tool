import React from 'react';
import './App.css';

import Header from './components/Header';
import Map from './components/Map';
import Sidebar from './components/Sidebar';


const App = (): JSX.Element => {
    return (
        <div className="App">
            <Header />
            <Map />
            <Sidebar />
        </div>
);
}

export default App;

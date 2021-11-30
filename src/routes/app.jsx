import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "@pages/Home.jsx";
import InitKeySetter from '../pages/InitKeySetter';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<InitKeySetter />}/>
                    <Route exact path=":key" element={<Home />}/>
                <Route/>
            </Routes>
        </Router>
    );
}

export default App;
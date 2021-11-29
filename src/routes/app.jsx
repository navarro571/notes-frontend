import React, {useReducer, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "@pages/home.jsx";
import AppContext from "@context/AppContext";
import useGroups from '@hooks/useGroups';
import useTasks from '@hooks/useTasks';

const App = () => {
    const groups = useGroups();
    const tasks = useTasks();

    return (
        <Router>
            <AppContext.Provider value={{ groups, tasks }}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
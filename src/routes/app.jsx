import React, {useReducer} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "@pages/home.jsx";
import AppContext from "@context/AppContext";
import GroupReducer from '../reducers/GroupReducer';
import TaskReducer from '../reducers/TaskReducer';
import HttpService from '../services/httpService';

const App = ({initialGroups}) => {
    const groupReducer = useReducer(GroupReducer, initialGroups);
    const taskReducer = useReducer(TaskReducer, []);

    return (
        <Router>
            <AppContext.Provider value={{ groupReducer, taskReducer }}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
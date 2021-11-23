import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "@pages/home.jsx";
import NotFound from "@pages/NotFound.jsx";
import AppContext from "@context/AppContext";

const App = () => {
    const [taskgroups, setTaskGroups] = useState(new Map([
        ["TASK", []],
        ["DOING", []],
        ["DONE", []]
    ]));
    return (
        <Router>
            <AppContext.Provider value={ {taskgroups: taskgroups, setTaskGroups: setTaskGroups } }>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
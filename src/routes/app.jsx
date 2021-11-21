import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "@pages/home.jsx";
import NotFound from "@pages/notfound.jsx";
import Layout from "@containers/layout";
import AppContext from "@context/appcontext";

const App = () => {
    const [taskgroups, setTaskGroups] = useState(new Map([
        ["TASK", []],
        ["DOING", []],
        ["DONE", []]
    ]));
    return (
        <BrowserRouter>
            <AppContext.Provider value={ {taskgroups: taskgroups, setTaskGroups: setTaskGroups } }>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Layout>
            </AppContext.Provider>
        </BrowserRouter>

    );
}

export default App;
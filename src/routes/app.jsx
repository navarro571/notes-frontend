import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "@pages/home.jsx";
import NotFound from "@pages/notfound.jsx";
import Layout from "@containers/layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
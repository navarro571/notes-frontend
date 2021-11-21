import React from 'react';
import Header from "@components/header";
import Panel from "@components/panel";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Panel />
            <Header />
            {children}
        </div>
    );
}

export default Layout;
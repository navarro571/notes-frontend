import React from 'react';
import Header from "@components/Header";
import Panel from "@components/Panel";

const HomeLayout = ({ children }) => {
    return (
        <div className="layout">
            <Panel />
            <Header />
            {children}
        </div>
    );
}

export default HomeLayout;
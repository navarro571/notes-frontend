import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/app';
import "@styles/style.scss";

(async function(){
    const initialGroups = await fetch("http://localhost:3000/api/v1/tasksgroups").then(res => res.json());
    ReactDOM.render(<App initialGroups={initialGroups} />, document.getElementById('app'));
}())
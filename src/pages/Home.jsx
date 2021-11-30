import React, { useState } from 'react';
import { useParams } from 'react-router';

import InitKeySetter from '@pages/InitKeySetter';
import AppContext from '../context/AppContext';
import Layout from "@containers/Layout";
import Groups from '@containers/Groups';
import useGroups from '@hooks/useGroups';
import useTasks from '@hooks/useTasks';

const Home = () => {
    const [dragging, setDragging] = useState();
    const params = useParams();
    const groups = useGroups(params.key);
    const tasks = useTasks(params.key);
    return (
        <AppContext.Provider value={{ groups, tasks, dragging, setDragging }}>
            <Layout>
                <Groups />
            </Layout>
        </AppContext.Provider>
    );
}

export default Home;
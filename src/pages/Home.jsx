import React, {useContext} from 'react';

import AppContext from "@context/AppContext";
import TaskGroup from "@containers/TaskGroup";
import HomeLayout from "@containers/HomeLayout";

const Home = () => {
    const { taskgroups, setTaskGroups } = useContext(AppContext);

    return (
        <HomeLayout>
            <div className="container-taskgroup">
                {Array.from(taskgroups.keys()).map((group,i) => <TaskGroup name={group} key={i+group} />)}
            </div>
        </HomeLayout>

    );
}

export default Home;
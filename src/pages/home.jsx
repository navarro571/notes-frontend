import React, {useContext} from 'react';

import AppContext from "@context/appcontext";
import TaskGroup from "@containers/taskgroup";

const Home = () => {
    const { taskgroups, setTaskGroups } = useContext(AppContext);

    return (
        <div className="container-taskgroup">
            {Array.from(taskgroups.keys()).map((group,i) => <TaskGroup name={group} key={i+group} />)}
        </div>
    );
}

export default Home;
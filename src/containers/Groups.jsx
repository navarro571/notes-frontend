import React, {useContext} from 'react'
import AppContext from "@context/AppContext";
import TaskGroup from "@containers/TaskGroup";

const Groups = () => {
    const { groups } = useContext(AppContext);
    const { state } = groups;
    return (
        <>
            <div className="container-taskgroup">
                {state.map(group => <TaskGroup data={group} key={group.id} />)}
            </div>
        </>
    );
}

export default Groups;
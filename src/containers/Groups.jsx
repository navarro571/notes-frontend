import React, {useContext} from 'react'
import AppContext from "@context/AppContext";
import TaskGroup from "@containers/TaskGroup";

const Groups = () => {
    const { groupReducer } = useContext(AppContext);
    const [state] = groupReducer;
    return (
        <>
            <div className="container-taskgroup">
                {state.map(group => <TaskGroup data={group} key={group.id} />)}
            </div>
        </>
    );
}

export default Groups;
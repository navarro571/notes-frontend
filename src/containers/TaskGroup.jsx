import React, {useContext, useEffect, useRef, useState,} from "react";
import Task from "@components/Task";
import AppContext from "@context/AppContext";

import removeIcon from "@assets/icons/remove.png";
import useDragContainer from "@hooks/useDragContainer";

const GroupContainTask = tasks => tasks.length > 0;
const random = () => Math.floor(Math.random() * 255);

const TaskGroup = ({ data }) => {
    const { taskReducer } = useContext(AppContext);
    const [ initialColor ] = useState({ borderTop: `2px solid rgb(${random()}, ${random()}, ${random()})`});
    const groupRef = useRef(null);
    const [state, dispatch] = taskReducer;
    useEffect(() => {
        const group = groupRef.current;
        useDragContainer(group);
    }, [])

    const removeHandler = () => {
        //taskgroups.delete(name);
        setTaskGroups(new Map(taskgroups));
    }
    return (
        <div className="taskgroup" ref={groupRef} style={initialColor} >
            <div className="header">
                <p className="title">{data.name.toUpperCase()}</p>
                <button onClick={() => removeHandler()}>
                    <img src={removeIcon} alt="Remove group icon" className="taskgroup-removeicon"/>
                </button>
            </div>
            <div className="body">
                { state.map(task => <Task data={task}
                                            key={task.id}/>) }
            </div>
        </div>
    );
}

export default TaskGroup;
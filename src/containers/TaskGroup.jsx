import React, {useContext, useEffect, useRef, useState,} from "react";
import Task from "@components/Task";
import AppContext from "@context/AppContext";

import removeIcon from "@assets/icons/remove.png";
import useDragContainer from "@hooks/useDragContainer";

const random = () => Math.floor(Math.random() * 255);

const TaskGroup = ({ data }) => {
    const [ initialColor ] = useState({ borderTop: `2px solid rgb(${random()}, ${random()}, ${random()})`});
    const { groups, tasks } = useContext(AppContext);
    const { remove } = groups;
    const { getTasks } = tasks;
    const groupRef = useRef(null);

    useEffect(() => {
        const group = groupRef.current;
        useDragContainer(group);
    }, [])

    const removeHandler = () => {
        remove(data.id);
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
                { /* Cambiar esto */getTasks(data.id) && getTasks(data.id).map(task => <Task data={task}
                                            key={task.id}/>) }
            </div>
        </div>
    );
}

export default TaskGroup;
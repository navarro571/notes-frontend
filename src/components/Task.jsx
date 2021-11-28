import React, {useContext, useEffect, useRef} from "react";

import edit from "@assets/icons/editing.png";
import eye from "@assets/icons/eye.png";
import remove from "@assets/icons/trash.png";
import AppContext from "@context/AppContext";
import useDraggableTask from "@hooks/useDraggableTask";

const Task = ({ data }) => {
    const { taskgroups, setTaskGroups } = useContext(AppContext);
    const taskRef = useRef(null);
    const NAME_MAXLENGHT = 30;
    const DESC_MAXLENGHT = 80;

    useEffect(() => {
        const task = taskRef.current;
        useDraggableTask(task);
    }, [])

    const RemoveHandler = () => {
        const tasks = taskgroups.get(parent);
        tasks.splice(tasks.findIndex(task => task.id === id), 1);
        taskgroups.set(parent, tasks);
        setTaskGroups(new Map(taskgroups));
    }
    return (
        <div className="task" draggable="true" ref={taskRef}>
            <div className="info">
                <p className="task-title">{data.name.length > NAME_MAXLENGHT ? (data.name.substring(0, NAME_MAXLENGHT)).concat("...") : data.name}</p>
                <p className="task-description">{data.desc.length > DESC_MAXLENGHT ? (data.desc.substring(0, DESC_MAXLENGHT)).concat("...") : data.desc}</p>
            </div>
            <div className="options">
                <img src={eye} alt="" draggable="false"/>
                <img src={edit} alt="" draggable="false"/>
                <img src={remove} alt="" onClick={() => RemoveHandler()} draggable="false"/>
            </div>
        </div>
    );
}

export default Task;
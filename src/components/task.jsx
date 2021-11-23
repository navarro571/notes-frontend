import React, {useContext, useEffect, useRef} from "react";

import edit from "@assets/icons/editing.png";
import eye from "@assets/icons/eye.png";
import remove from "@assets/icons/trash.png";
import AppContext from "@context/AppContext";
import useDraggableTask from "@hooks/useDraggableTask";

const Task = ({ id, name, description, group }) => {
    const { taskgroups, setTaskGroups } = useContext(AppContext);
    const taskRef = useRef(null);
    const DESC_MAXLENGHT = 80;
    let parent = group;

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
                <p className="task-title">{name}</p>
                <p className="task-description">{description.length > DESC_MAXLENGHT ? (description.substring(0, DESC_MAXLENGHT)).concat("...") : description}</p>
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
import React, {useContext, useRef} from "react";

import editIcon from "@assets/icons/editing.png";
import eyeIcon from "@assets/icons/eye.png";
import removeIcon from "@assets/icons/trash.png";
import AppContext from "@context/AppContext";

const Task = ({ data }) => {
    const { tasks, setDragging } = useContext(AppContext);
    const { remove } = tasks;
    const taskRef = useRef(null);
    const NAME_MAXLENGHT = 30;
    const DESC_MAXLENGHT = 80;

    const dragStartHandler = e => {
        const task = taskRef.current;
        e.dataTransfer.setData('text/plain', e.target.id);
        task.classList.add('dragging');
        setDragging({taskRef: task, taskData: data});
    }
    const dragEndHandler = e => {
        const task = taskRef.current;
        task.classList.remove('dragging');
    }

    const RemoveHandler = () => remove(data.id);

    return (
        <div className="task" onDragStart={e => dragStartHandler(e)} onDragEnd={e => dragEndHandler(e)} draggable="true" ref={taskRef}>
            <div className="info">
                <p className="task-title">{data.name.length > NAME_MAXLENGHT ? (data.name.substring(0, NAME_MAXLENGHT)).concat("...") : data.name}</p>
                <p className="task-description">{data.desc.length > DESC_MAXLENGHT ? (data.desc.substring(0, DESC_MAXLENGHT)).concat("...") : data.desc}</p>
            </div>
            <div className="options">
                <img src={eyeIcon} alt="" draggable="false"/>
                <img src={editIcon} alt="" draggable="false"/>
                <img src={removeIcon} alt="" onClick={() => RemoveHandler()} draggable="false"/>
            </div>
        </div>
    );
}

export default Task;
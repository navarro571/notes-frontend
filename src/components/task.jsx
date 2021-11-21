import React, {useContext, useEffect, useRef} from "react";

import circle from "@assets/icons/circle.png";
import edit from "@assets/icons/editing.png";
import eye from "@assets/icons/eye.png";

const Task = ({ name, description }) => {
    const taskRef = useRef(null);

    useEffect(() => {
        let task = taskRef.current;
        task.addEventListener('dragstart', () => task.classList.add('dragging'))
        task.addEventListener('dragend', () => task.classList.remove('dragging'))
    })
    return (
        <div className="task" ref={taskRef} draggable="true" >
            <div className="info">
                <img src={circle} alt="" draggable="false"/>
                <p>{name}</p>
            </div>
            <div className="options">
                <img src={eye} alt="" draggable="false"/>
                <img src={edit} alt="" draggable="false"/>
            </div>
        </div>
    );
}

export default Task;
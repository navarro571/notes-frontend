import React, {useContext, useEffect, useRef, useState,} from "react";
import Task from "@components/Task";
import AppContext from "@context/AppContext";

import removeIcon from "@assets/icons/remove.png";

const random = () => Math.floor(Math.random() * 255);

const State = ({ data }) => {
    const [ initialColor ] = useState({ borderTop: `2px solid rgb(${random()}, ${random()}, ${random()})`});
    const { states, tasks, dragging } = useContext(AppContext);
    const { remove } = states;
    const { getTasks, update } = tasks;
    const bodyRef = useRef(null);

    const dragEnterHandler = e => e.preventDefault();

    const dragOverHandler = e => e.preventDefault();
    const dropHandler = e => {
        e.preventDefault();
        const task = {
            ...dragging.task,
            stateid: data.id,
        }
        update(task.id, task);
    }
    const removeHandler = () => {
        remove(data.id);
    }
    return (
        <div className="state"  onDragEnter={e => dragEnterHandler(e)}
                                    onDragOver={e => dragOverHandler(e)}
                                    onDrop={e => dropHandler(e)}
                                    style={initialColor} >
            <div className="header">
                <p className="title">{data.name.toUpperCase()}</p>
                <button onClick={() => removeHandler()}>
                    <img src={removeIcon} alt="Remove state icon" className="state-removeicon"/>
                </button>
            </div>
            <div className="body" ref={bodyRef}>
                { /* Cambiar esto */getTasks(data.id) && getTasks(data.id).map(task => <Task data={task}
                                            key={task.id}/>) }
            </div>
        </div>
    );
}

export default State;
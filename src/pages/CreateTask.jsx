import React, {useContext, useRef} from "react";
import AppContext from "@context/AppContext";

const CreateTask = ({ State }) => {
    const { groupReducer, taskReducer } = useContext(AppContext);

    const form = useRef(null);

    const CreateHandler = e => {
        e.preventDefault();
        const formData = new FormData(form.current);
        //CONSULTAR SI HAY GRUPOS Y SI HAY AGREGA UNA TAREA CON EL IDGROUP 0
        State(false);
    }
    const CloseHandler = e => {
        e.preventDefault();
        State(false);
    }

    return (
        <div className="menu-background">
            <div className="menu-createtask">
                <form action="/" ref={form}>
                    <div className="createtask-title">
                        <h3>Create task</h3>
                    </div>
                    <div className="createtask-content">
                        <div className="createtask-name">
                            <label htmlFor="name">Task name</label>
                            <input id="name" name="taskname" maxLength={50} type="text" placeholder="name"/>
                        </div>
                        <div className="createtask-description">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="taskdesc" wrap="hard" placeholder="description"/>
                        </div>
                        <div className="createtask-buttons">
                            <button className="success" onClick={e => CreateHandler(e)}>CREATE</button>
                            <button className="danger" onClick={e => CloseHandler(e)}>CANCEL</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default CreateTask;
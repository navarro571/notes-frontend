import React, {useContext, useRef} from "react";
import AppContext from "@context/appcontext";

const CreateTask = ({ State }) => {
    const { taskgroups, setTaskGroups } = useContext(AppContext);

    const form = useRef(null);

    const CreateHandler = e => {
        e.preventDefault();
        const container = document.querySelector('.taskgroup .title');
        if(!container){
            State(false);
            return;
        }
        const formData = new FormData(form.current);
        taskgroups.get(container.textContent).push({
            name: formData.get('taskname'),
            description: formData.get('taskdesc'),
        });
        setTaskGroups(new Map(taskgroups));
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
                            <input id="name" name="taskname" type="text"/>
                        </div>
                        <div className="createtask-description">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="taskdesc" wrap="hard" />
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
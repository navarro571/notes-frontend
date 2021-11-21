import React, {useContext} from "react";
import Task from "@components/task";
import AppContext from "@context/appcontext";

import removeIcon from "@assets/icons/remove.png";

function GroupContainTask (tasks){
    return tasks.length > 0;
}

const TaskGroup = ({name }) => {
    const { taskgroups, setTaskGroups } = useContext(AppContext);

    const removeHandler = () => {
        taskgroups.delete(name);
        setTaskGroups(new Map(taskgroups));
    }

    return (

        <div className="taskgroup">
            <div className="header">
                <p className="title">{name.toUpperCase()}</p>
                <button onClick={() => removeHandler()}>
                    <img src={removeIcon} alt="Remove group icon" className="taskgroup-removeicon"/>
                </button>
            </div>
            <div className="body">
                { GroupContainTask(taskgroups.get(name)) &&
                  taskgroups.get(name).map((task, i) => <Task name={task.name}
                                                              description={task.description}
                                                              key={i+task.name}/>) }

            </div>
        </div>
    );
}

export default TaskGroup;
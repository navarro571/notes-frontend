import React, {useContext, useRef} from "react";
import AppContext from "@context/appcontext";

const CreateGroup = ({ State }) => {
    const { taskgroups, setTaskGroups } = useContext(AppContext);

    const form = useRef(null)
    const errorMessage = useRef(null);

    const CreateHandler = e => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const name = formData.get('groupname');
        if(taskgroups.has(formData.get('groupname'))){
            errorMessage.current.innerText = "- Este nombre ya existe, introduce otro";
        }else{
            taskgroups.set(formData.get('groupname').toUpperCase(), []);
            setTaskGroups(new Map(taskgroups));
            State(false);
        }
    }
    const CloseHandler = e => {
        e.preventDefault();
        State(false);
    }

    return (
        <div className="menu-background">
            <div className="menu-creategroup">
                <form action="/" ref={form}>
                    <div className="creategroup-title">
                        <h3>Create Group</h3>
                    </div>
                    <div className="creategroup-content">
                        <div className="creategroup-name">
                            <div className="inputlabel-container">
                                <label htmlFor="name">Group name</label>
                                <p className="errormessage" ref={errorMessage}></p>
                            </div>
                            <input id="name" name="groupname" type="text"/>
                        </div>
                        <div className="creategroup-buttons">
                            <button className="success" onClick={e => CreateHandler(e)}>CREATE</button>
                            <button className="danger" onClick={e => CloseHandler(e)}>CANCEL</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default CreateGroup;
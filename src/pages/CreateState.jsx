import React, {useContext, useRef} from "react";
import AppContext from "@context/AppContext";

const CreateState = ({ State }) => {
    const { states } = useContext(AppContext);
    const { create } = states;
    const form = useRef(null)
    const errorMessage = useRef(null);

    const CreateHandler = e => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('statename'),
        }
        create(data);
        State(false);
    }
    const CloseHandler = e => {
        e.preventDefault();
        State(false);
    }

    return (
        <div className="menu-background">
            <div className="menu-createstate">
                <form action="/" ref={form}>
                    <div className="createstate-title">
                        <h3>Create State</h3>
                    </div>
                    <div className="createstate-content">
                        <div className="createstate-name">
                            <div className="inputlabel-container">
                                <label htmlFor="name">State name</label>
                                <p className="errormessage" ref={errorMessage}></p>
                            </div>
                            <input id="name" name="statename" type="text"/>
                        </div>
                        <div className="createstate-buttons">
                            <button className="success" onClick={e => CreateHandler(e)}>CREATE</button>
                            <button className="danger" onClick={e => CloseHandler(e)}>CANCEL</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default CreateState;
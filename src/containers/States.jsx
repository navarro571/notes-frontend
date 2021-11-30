import React, {useContext} from 'react'
import AppContext from "@context/AppContext";
import State from "@components/State";

const States = () => {
    const { states } = useContext(AppContext);
    const { state } = states;
    return (
        <>
            <div className="container-taskgroup">
                {state.map(state => <State data={state} key={state.id} />)}
            </div>
        </>
    );
}

export default States;
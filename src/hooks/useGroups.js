import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3000/api/v1";

const useGroups = () => {
    const [state, setState] = useState([]);

    useEffect(() => updateState(), [])

    const find = id => state.find(group => group.id == id);

    const create = async (data) => {
        const res = await fetch(BASE_URL + "/taskgroups", {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ name: data.name })
        }).then(res => res.json());
        updateState();
        return res;
    }
    const update = async (id, data) => {
        const res = await fetch(BASE_URL + "/taskgroups/"+id, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: { name: data.name },
        }).then(res => res.json());
        updateState();
        return res;
    }
    const remove = async (id) => {
        await fetch(BASE_URL + "/taskgroups/" + id, { method: 'DELETE' }).then(res => res.json());
        updateState();
    }
    const updateState = async () => {
        const res = await fetch(BASE_URL + "/taskgroups", { method: 'GET' }).then(res => res.json());
        setState(res);
    }
    return {
        state,
        find,
        create,
        update,
        remove
    }
}

export default useGroups;
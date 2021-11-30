import React, { useEffect, useState } from 'react'


const BASE_URL = "http://localhost:3000/api/v1";

const useTasks = (key) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => updateState(), 10000);
        return () => clearInterval(interval);
    }, []);

    const find = id => state.find(task => task.id == id);
    const getTasks = groupid => state.filter(task => task.groupid == groupid);

    const create = async (data) => {
        const res = await fetch(BASE_URL + "/tasks?key="+key, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                groupid: data.groupid,
                name: data.name,
                desc: data.desc,
            }),
        }).then(res => res.json());
        updateState();
        return res;
    }
    const update = async (id, data) => {
        const res = await fetch(BASE_URL + "/tasks/?key="+key+"&id=" + id, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: JSON.stringify({
                groupid: data.groupid,
                name: data.name || "",
                desc: data.desc || "",
            }),
        }).then(res => res.json());
        updateState();
        return res;
    }
    const remove = async (id) => {
        await fetch(BASE_URL + "/tasks/?key="+key+"&id=" + id, { method: 'DELETE' }).then(res => res.json());
        updateState();
    }
    const updateState = async () => {
        const res = await fetch(BASE_URL + "/tasks/?key=" + key, { method: 'GET' }).then(res => res.json());
        setState(res);
    }
    return {
        state,
        find,
        getTasks,
        create,
        update,
        remove
    }
}
export default useTasks;
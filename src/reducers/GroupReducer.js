import HttpService from "../services/httpService";

const base_url = "http://localhost:3000/api/v1";

const GroupReducer = async (state, action) => {
    let res;
    switch(action.type){
        case "@groups/get":
            res = HttpService.Request("get", base_url + "/taskgroups");
            break;
        case "@groups/find":
            res = HttpService.Request("get", base_url + "/taskgroups/" + action.id);
            break;
        case "@groups/add":
            res = HttpService.Request("post", base_url + "/taskgroups/", action.body);
            break;
        case "@groups/delete":
            res = HttpService.Request("delete", base_url + "/taskgroups/" + action.id, action.body);
            break;
        case "@groups/update":
            res = HttpService.Request("put", base_url + "/taskgroups/" + action.id, action.body);
            break;
        default:
            throw new Error();
    }
    return res;
}

export default GroupReducer;
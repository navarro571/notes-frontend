const TaskReducer = (state, action) => {
    let res;
    switch(action.type){
        case "@tasks/get":
            res = HttpService.Request("get", base_url + "/taskgroups");
            break;
        case "@tasks/find":
            res = HttpService.Request("get", base_url + "/taskgroups/" + action.id);
            break;
        case "@tasks/add":
            res = HttpService.Request("post", base_url + "/taskgroups/", action.body);
            break;
        case "@tasks/delete":
            res = HttpService.Request("delete", base_url + "/taskgroups/" + action.id, action.body);
            break;
        case "@tasks/update":
            res = HttpService.Request("put", base_url + "/taskgroups/" + action.id, action.body);
            break;
        case "@tasks/partialUpdate":
            res = HttpService.Request("put", base_url + "/taskgroups/" + action.id, action.body);
            break;
        default:
            throw new Error();
    }
    return res;
}
export default TaskReducer;
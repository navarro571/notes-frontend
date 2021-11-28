class HttpService {
    static Request(type, query, body = {}){
        try {
            return fetch(query, {
                method: type,
                body
            }).then(res => res.json());
        } catch(error) {
            console.error(error);
        }
    }
}

export default HttpService;
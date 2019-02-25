import axios from 'axios';
class ServerCall{
    static fnPostRes(url,data){
        return axios.post(url,data);
    }
}

export default ServerCall;
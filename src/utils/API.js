//local
const URL_PREFIX = "http://localhost:3000"
//deployment
// const URL_PREFIX = "http://localhost:3000"

const API = {
    getAllTanks:()=>{
        return fetch(`${URL_PREFIX}/api/tanks`).then(res=>res.json());
    },
    getOneTank:tankId=>{
        return fetch(`${URL_PREFIX}/api/tanks/${tankId}`).then(res=>res.json());
    }
}

export default API
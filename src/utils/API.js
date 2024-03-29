//local
const URL_PREFIX = "http://localhost:3000"
//deployment
// const URL_PREFIX = "http://localhost:3000"

const API = {
    login:userObj=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error("network request failed")
            }
        })
    },
    signup:userObj=>{
        return fetch(`${URL_PREFIX}/api/users`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error("network request failed")
            }
        })
    },
    getAllTanks:()=>{
        return fetch(`${URL_PREFIX}/api/tanks`).then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error("network request failed")
            }
        })
    },
    getOneTank:tankId=>{
        return fetch(`${URL_PREFIX}/api/tanks/${tankId}`).then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error("network request failed")
            }
        })
    },
    createTank:(tankName,token)=>{
        return fetch(`${URL_PREFIX}/api/tanks`,{
            method:"POST",
            body:JSON.stringify({name:tankName}),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error("network request failed")
            }
        })
    },
    createFish:(fishObj,token)=>{
        return fetch(`${URL_PREFIX}/api/fishes`,{
            method:"POST",
            body:JSON.stringify(fishObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error("network request failed")
            }
        })
    }
}

export default API
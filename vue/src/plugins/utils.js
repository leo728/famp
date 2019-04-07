const utils = {
    postData:(url, data)=>{

    },
    getData:(url, data)=>{

    },
    getItem:(k)=>{
        let v = window.localStorage.getItem(k)
        return JSON.parse(v)
    },
    setItem(k, v) {
        let type = typeof v
        if(type === 'object'){
            v = JSON.stringify(v)
        }
        window.localStorage.setItem(k, v)
    }
}
export default utils
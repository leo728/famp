const utils = {
    postData:(url, data)=>{

    },
    getData:(url, data)=>{

    },
    cache:(k,v)=>{
        if(k && v){
            if(!this.cache(k)){
                let type = typeof v
                if(type === 'object'){
                    v = JSON.stringify(v)
                }
                localStorage.setItem(k, v)
            }
        }
        if(k && !v){
            return localStorage.getItem(k)
        }
    },
    session:(k,v)=>{

    },
    getItem:(k)=>{
        let v = window.localStorage.getItem(k)
        return JSON.parse(v)
    },
    setItem(k, v) {
        if(!this.getItem(k)){
            let type = typeof v
            if(type === 'object'){
                v = JSON.stringify(v)
            }
            window.localStorage.setItem(k, v)
        }
    }
};
export default utils
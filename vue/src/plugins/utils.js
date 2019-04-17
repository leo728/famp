const utils = {
    cache:(k,v)=>{
        if(k && v){
            if(!localStorage.getItem(k)){
                let type = typeof v
                if(type === 'object'){
                    v = JSON.stringify(v)
                }
                localStorage.setItem(k, v)
            }
        }
        if(k && !v){
            return JSON.parse(localStorage.getItem(k))
        }
    }
};
export default utils
//  export const kiemTraRong = (test)=>
//     test==="";

    export const kiemTraRong = (test)=>{
        if (test===""){
            return true;
        }
        return false;
    }


    export const kiemTraMail =(test)=> {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(test);
    }

    export const kiemTraPhone = (test) =>{
        var re =  /^\d+$/;
        if (re.test(test) && value.length < 11&& value.length >9){
            return true;
        }
    }

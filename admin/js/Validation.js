function Validation(){
    this.kiemTraRong = function(value){
        if (value.trim()===""){
            return true;
        }
        return false;
    }

    this.kiemTraMail = function( value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }

    this.kiemTraPhone = function(value){
        var re =  /^\d+$/;
        if (re.test(value) && value.length < 11&& value.length >9){
            return true;
        }
        else{
            return false;
        }
    }

    this.KimTraSelect = function(value){
        if(value > 0 ){
            return true
        }else{
            return 0 ;
        }
    }

}
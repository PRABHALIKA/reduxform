function validation(data){
    let errors={};
    if(!data.uid){
        errors.uid="Please enter uid"
    }

    if(data.uid && data.uid.length < 8){
        errors.uid="Please enter minimum 8 chars"
    }


    if(!data.pwd){
        errors.pwd="Please enter password"
    }

    if(!data.email){
        errors.email="Please enter email"
    }else{
        var reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        var isValid=reg.test(data.email);
        if(!isValid){
            errors.email="Please enter valid email id" 
        }
    }

    if(!data.phone){
        errors.phone="Please enter phone no"
    }

    return errors;

}

export default validation;
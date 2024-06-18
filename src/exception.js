class MyException extends Error{

}

export const callMe = (name)=>{
    if(name === 'hass'){
        throw new MyException("ahahhaha")
    } else{
        return "ok"
    }

}
export const sayHello = (name) =>{
    if (name){
        return `Hello ${name}`
    }else{
        throw new Error("nmae is required")
    }
}
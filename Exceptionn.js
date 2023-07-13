function add(num1,num2){
    if(!num1 || !num2){

throw new Error( "num1 or num2 is Undefined");
    }
    return num1+num2;
}
try{


console.log(add(null,12));
}
catch(err){
    console.log("Exception caught"+err);
}
let inp =document.getElementById('inp');
function press(num){
    inp.value +=num

}
//this funcaation to make buttons value show on input
function clea(){
    inp.value ='';
}
// this function to delet all numbers 
function del(){
    inp.value=inp.value.slice(0,-1)
}
//this function to delete the last number
function equal(){
    try{
        inp.value =eval(inp.value)
// this method to resolve the exampls
    }
    catch (errrr){
        inp.value='error'
       //this method show when you make a wrong exercies
      setTimeout(function(){clea()},1000)
      //this method turn on after error
    }
   
}
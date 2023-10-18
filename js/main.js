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
//This method to resolve the examples
    }
    catch (errrr){
        inp.value='error'
       //this method shows when you do the wrong exercises
      setTimeout(function(){clea()},500)
      //this method turn on after error
    }
   
}

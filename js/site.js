//get values from the interface
function reverseString(stringValue){

    let stringValues = document.getElementById("stringValue").value;
    let result =[];
   for (let index = stringValues.length-1; index >= 0;  index--) {
      
       result += stringValues[index];
    }
    return result;
}
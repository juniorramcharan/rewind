//get values from the interface
function getTheReverse(stringValue){
    //get String Value.
    let stringValues = document.getElementById("stringValue").value;
                        document.getElementById("alert").classList.add("invisible");
    //reverse the string value
  let reverseValue =  doTheRevers(stringValues);

    //display the value
    displayTheReverse(reverseValue);
    
}
function doTheRevers(valueToReverse){
    let result =[];
    for (let index = valueToReverse.length-1; index >= 0;  index--) {
       
        result += valueToReverse[index];
     }
     return result;

}

function displayTheReverse(myValue){

    document.getElementById('result').innerHTML =`Your reverse string is: ${myValue}`;
    document.getElementById("alert").classList.remove("invisible");

}
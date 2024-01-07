const display = document.getElementById("display"); // getting the element from the html code

/**
* appendToDisplay: Takes the input and appends it on the display
* @param: input - a certian given input by the user
*/
function appendToDisplay(input){
    display.value += input;
} //end of appendToDisplay()

/**
* clearDisplay: Replaces the display with an empty string, essentially clearing it
*/
function clearDisplay(){
    display.value = "";
} // end of clearDisplay()

/**
 * calculate: uses the inbuild eval function to calculate all the given operations by a user
*/
function calculate(){

    try{ //try block to ensure that any errors are not overlooked
        display.value = eval(display.value);
    }
    catch(error){ //catch block displays error message if any errors are encountered
        display.value = "Error";
    }
   
} //end of calculate()
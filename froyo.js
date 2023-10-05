
// Prompt the user for a list of integers separated by commas. And an example.
const userInputString = prompt(
    "Please enter the froyo flavors you want to order separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

// Split the string of flavors into an array of strings.
const flavorsArray = userInputString.split(",");
//console.log(flavorsArray);

//1. Function to calculate the frequencies of the elements in the flavors Array
//2. An empty object called frequencies to the the frequencies of each element
//3. If Statement checks if the element already exist(observed) as a property in the frequencies object. 
//4. If yes incremnt by 1
//5. Else if not initialize with value of 1, indicating that we've encountered it once 
//6. After its done iterating through the array return the frquencies object 
function calculateElementFrequencies(flavorsArray) {
    const frequencies = {};     
    for (const key of flavorsArray) {  
        if (frequencies[key]) {     // key is same to item/ index
            frequencies[key]++;
        } else {
            frequencies[key] = 1;  
        }
    }
    return frequencies; 
}
// Returns the keys and values in a table
console.table(calculateElementFrequencies(flavorsArray));
//Stores the function in const resultOject and console.tables it 
//const resultObject = calculateElementFrequencies(flavorsArray);
//console.table(resultObject);


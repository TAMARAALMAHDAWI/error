function generateRangeError() {
    
    throw new RangeError("Value is out of acceptable range");
  }
  
  
  try {
    generateRangeError();
  } catch (error) {
    console.error(error.name + ": " + error.message); 
  }  


  //2//
  function generateReferenceError() {
    
    console.log(nonExistentVariable);
  }
  
  // Example usage:
  try {
    generateReferenceError();
  } catch (error) {
    console.error(error.name + ": " + error.message); 
  }

  //3//
  function generateURIError() {
    
    decodeURIComponent('%');
  }
  
  
  try {
    generateURIError();
  } catch (error) {
    console.error(error.name + ": " + error.message); 
  }

  //4//
  function generateTypeError() {
    
    const notAFunction = 42;
    notAFunction();
  }
  
  
  try {
    generateTypeError();
  } catch (error) {
    console.error(error.name + ": " + error.message); 

    
  }


  //5//
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Process data
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to load data. Please try again later.');
    }
  }
//6//

function squareNumber(number) {
    
    if (typeof number !== 'number') {
      
      throw 'Argument is not a number';  
    }
    
    
    return number * number;
  }
  
// 3. Write a function expression that takes in another function as an argument. 

      const firstName = function ()
      {
        return "Manoj";
     }

    const fullName=function(fname){ // Taking function as an argument
        return fname+"Kumar";    
    }

    const myName = fullName(firstName());
    console.log(myName);
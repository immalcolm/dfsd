//process function to check and return category 
function checkAge(age) {
    let flag = false;
    let ageCategory = '';

  
    if (age == 13) {
        console.log(`age is.. ${age}.. in the if statement.. `)
        flag = true;
        ageCategory = "Child";
        console.log(`Child ${ageCategory}` );
        //return "Child";
    } else if (age >= 13 && age <= 19) {
        flag = true;
        ageCategory = "Teen";
        //return "Teen";
    } else {
        flag = true;
        ageCategory = "Adult";
        //return "Adult";
    }
    if(flag){
        return ageCategory;
    }

        return "Invalid age";
    
    //return xxx. 
}

console.log(checkAge(25));  // Outputs: Adult

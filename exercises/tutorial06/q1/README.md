
## Guidelines
Use the dot notation when possible

```js
let student = {
    firstName:'John',
    lastName:'Smith',
    'age': 19,
    contact:{
      email:'johnsmith@fakeschool.com',
      phoneNumber:{
        'country code':'+65',
        'number': '9919912'
      }
    },
    address: {
      'streetName':'Yishun Ring Road',
      'building': 'Blk 171 #11-221'
    },
    classes:[
      "Computing 101", "Computing 102", "Computing 103"
    ],
    grades:[
      {
        'subject name':'Computing 1',
        'Grade': 85
      },
      {
        'subject name':'Computing 2',
        'grade': 31
      },
      {
        'subject name':'Computing 3',
        'grade': 75
      }
    ]
   }
 ```
   
##### Q1: Write the code that will display the first name and last name of the student in one line inside the console:


###### Q2: Display the age of the student in the console:

###### Q3: Display the student's country code and phone number in the same line using the console:

##### Q4: Change the age of the student to 21:

##### Q5: Add a new property to the student object. The property name is "gender" and the value is "male"

##### Q6: The student is taking one more class, "Computing 104". Add that to the classes array inside the student's object (hint: consult previous lesson on sequences for how to add to the back of an array)

##### Q7: Evaluate the last line of the code below:
```js
let s = student;
s.contact.email "johnsmith@fakehotmail.com"
console.log(student.contact.email); 
```

##### Q8: Complete the code below so that it will yield the following output:
```js
for (let _____ in _____) {
 console.log(______," : ", student._______[_______])
}

//Expected Output:
streetName : Yishun Ring Road
building: Blk 171 #11-221
```

##### Q9: Add a method the student object definition (that is, directly within `let student = { … }` that when called will return the following output:
```js
//Expected Output:
John Smith (johnsmith@fakehotmail.com) 
```
Write the code for the method below:


##### Q10: Consider the following object below, which pairs a student id with each student:
```js
let studentDatabase = {
  "A123456":"John Doe",
  "B421123":"Jane Smith",
  "C1231234":"James Bond"
}
```
Complete the program below so that when a user can enter the ID of a student. Display the name of the student if the ID exists as a property key in the studentDatabase object; otherwise, display **"the student is not found".**

```js
const prompt = require('prompt-sync')(); // delete this line if programming in repl.it

let studentDatabase = {
  "A123456":"John Doe",
  "B421123":"Jane Smith",
  "C1231234":"James Bond"
}

let studentId = prompt("Please enter the student ID: ");

if (________) {
  console.log("Student found! Their name is: ", ________);
} else {
  console.log("The student is not found!");
}
```

## References
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
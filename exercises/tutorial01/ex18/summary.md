# Qns 18 Summary

Learn about shorthand for booleans
isSunny == true 
isSunny === true

**Shorthand**  
isSunny 

```js
//isSunny == true
if(isSunny){
    console.log("let's go to the beach")
}
```

## Parenthesis
having parenthsis within -->((insert a condition))
we make use of brackets to represent parenthesis
```js
//we enclose the condition inside
if((isSunny || isCloudy) && isJaniceGoing){
    console.log("Let's go to the beach")
}
```

**OR operator**
|| --> A OR B  --> either this... or that... 
```js
//either condition satisfy 
if (strikeToto || strike4D){
    console.log("eat good food")
}
```
**AND operator**
&& --> A AND B --> this... AND that 
```js
if(strikeToto && strike4D){
    console.log("time.. to retire... ")
}
```

if((isSunny || isCloudy) && conditionA && conditionB){

}
```js
if(ifSunny || isCloudy){
    //nested if
    if(conditionA){
        //do something
    }
    if(conditionB){
        //do something.. 
    }
}
```

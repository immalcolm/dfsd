const base_counter = 1;
let upper_bound = 10;

//using a shortcut to skip the initialization of the counter
for(; upper_bound >= base_counter; upper_bound--){
    console.log(`counter: ${upper_bound}`);
}
console.log(`liftoff!`);   
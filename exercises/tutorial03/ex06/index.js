function checkAge(age) {
    if (age < 13) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teen";
    } else {
        return "Adult";
    }
}

console.log(checkAge(25));  // Outputs: Adult

function canVote(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(canVote(18));  // Incorrectly returns false for age 18

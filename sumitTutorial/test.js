function myFunction(sValue, eValue) {
    // Generate a random number between eValue and sValue
    const randomNumber = Math.floor(Math.random() * sValue) + eValue;
    console.log(randomNumber);
    return randomNumber;
}


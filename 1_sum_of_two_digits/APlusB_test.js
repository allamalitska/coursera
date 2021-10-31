const readline = require('./APlusB.js');

const superSimplTestAPlusB = (
    a , b, expectedVal
) => {
    const calculatedMaxValue = readline(a,b)
    if(calculatedMaxValue === expectedValue){
        console.log(`Success: Ran with [${exampleArray}]: and recieved ${expectedValue}`)
    } else {
    	console.log(`Failure: Ran with [${exampleArray}]: recieved ${calculatedMaxValue} but expected ${expectedValue}`)
    }
}

superSimplTestAPlusB(1,3,4)
superSimplTestAPlusB(-1,3,2)
superSimplTestAPlusB(1.5,3,4.5)

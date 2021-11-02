const sum = require('./APlusB.js');

const superSimplTestAPlusB = (
    a , b, expectedValue) => {
    const sum1 = sum(a,b)
    if( sum1 === expectedValue){
        console.log(`Success: Ran with [${a}, ${b}]: and ${expectedValue}`)
    } else {
    	console.log(`Failure: Ran with ${[a,b]}: and ${sum1} but expected ${expectedValue}`)
    }
}

superSimplTestAPlusB(1,3,4)
superSimplTestAPlusB(-1,3,2)
superSimplTestAPlusB(1.5,3,4.5)

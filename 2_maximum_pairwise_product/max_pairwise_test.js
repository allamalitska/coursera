const  max = require('./max_pairwise_product.js')

const superSimpleTest = (exampleArray, expectedValue) => {
    const calculatedMaxValue = max(exampleArray)
    if(calculatedMaxValue === expectedValue){
        console.log(`Success: Ran with [${exampleArray}]: and recieved ${expectedValue}`)
    } else {
    	console.log(`Failure: Ran with [${exampleArray}]: recieved ${calculatedMaxValue} but expected ${expectedValue}`)
    }
}

superSimpleTest([5,4,3,1], 20)
superSimpleTest([], 0)
superSimpleTest([5], 0)
superSimpleTest([], 0)
superSimpleTest([5,5], 25)

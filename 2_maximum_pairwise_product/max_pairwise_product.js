// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    let n = arr.length-1
    let pairSums = []
    let maxValue = 0;
        for (i=0; i< arr.length-2; i++)
            for (j=1; j< arr.length -1; j++)
                totalPairs.push([arr[i],arr[j]])
                pairSums.push([arr[i]*arr[j]])
                maxValue = Math.max(maxValue, aar[i]*arr[j])

}

const value = maxPairSum([5,4,3,1])



const superSimpleTests = (exampleArray, expectedValue)=>{

    if(sumArrayPairs(exampleArray)===expectedValue){
    console.log('This example passes!')
    }
    console.log('This example failse!')
    }
    
    superSimpleTests([5,4,3,1], 20)
    superSimpleTests([], 0)
    superSimpleTests([5], 0)
    superSimpleTests([], 0)
    superSimpleTests([5,5], 25)

module.exports = max;

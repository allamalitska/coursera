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
    console.log(arr);
    console.log(max(arr));
    process.exit();
}

const max = (arr) => {
    const pairSums = []
    const pairs = []
    
    let endIndex = arr.length - 1
    let maxValue = 0
    
    for (i = 0; i <= endIndex-1; i++) {
        for (j = i+1; j <= endIndex; j++) {
            pairs.push([i, j])
            pairSums.push(arr[i] * arr[j])
            maxValue = Math.max(maxValue, arr[i] * arr[j])
        }
    }
    
    return maxValue
}


const maxWithSort = (arr) => {
    const sortedArr = arr.sort()
    
    if(arr.length < 2){
        return 0
    }else {
        return sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2]
    }
}


module.exports = max;

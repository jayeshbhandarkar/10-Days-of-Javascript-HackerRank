'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    const firstChar = s[0];
    
    switch (true) {
        case 'aeiou'.includes(firstChar):
            letter = 'A';
            break;
        case 'bcdfg'.includes(firstChar):
            letter = 'B';
            break;
        case 'hjklm'.includes(firstChar):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(firstChar):
            letter = 'D';
            break;
    }
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}

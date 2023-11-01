//declaring arrays
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

const nonalphanumeric = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(',')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '"', "'", '<', ',', '>', '.', '?', '/'];

//password generator: for loop, randon number, switch structure
let passgene = '';
let passlength = 12;

for (i = 0; i < passlength; i++){
    let x = Math.floor(Math.random() * 4 + 1);
    switch(x){
        case 1:
            let upper = Math.floor(Math.random() * (upperCase.length - 1));
            let resultC1 = upperCase[upper];
            passgene = passgene.concat(resultC1);            
            break;
        case 2:
            let lower = Math.floor(Math.random() * (lowerCase.length - 1));
            let resultC2 = lowerCase[lower];
            passgene = passgene.concat(resultC2); 
            break;
        case 3:
            let numb = Math.floor(Math.random() * (numbers.length - 1));
            let resultC3 = numbers[numb];
            passgene = passgene.concat(resultC3); 
            break;
        case 4:
            let non = Math.floor(Math.random() * (nonalphanumeric.length - 1));
            let resultC4 = nonalphanumeric[non];
            passgene = passgene.concat(resultC4); 
            break;
    }
}

console.log(`New password = ${passgene}`);
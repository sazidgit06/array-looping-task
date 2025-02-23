/*
    Task3
    Use a for...of loop to concatenate all the elements of an array into a single string.

    Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

    Output:

    'TomTimTinTik'
*/

let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let str = '';
for(let num of numbers){
    str = str.concat(num);
}
console.log(str);
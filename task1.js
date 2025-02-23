/*
    Task 1
    Write a JavaScript code to reverse the array colors without using the reverse method.

    Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

    Output:

    ['orange', 'yellow', 'green', 'blue', 'red']
*/



const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revColorArr = [];
for(const rev_colors of colors){
    revColorArr.unshift(rev_colors);
}
console.log(revColorArr);

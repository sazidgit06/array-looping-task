const numbers = [12, 98, 5, 41, 23, 78, 46];
const numArr = [];
for(const num of numbers){
    if(num % 2 == 0){
        numArr.push(num);
    }
}
console.log(numArr);
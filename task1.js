const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revColorArr = [];
for(const rev_colors of colors){
    revColorArr.unshift(rev_colors);
}
console.log(revColorArr);

/*  
    Task 4
    Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

    Input: const statement = 'I am a hard working person'

    Output:

    'person working hard a am I'
*/

const statement = 'I am a hard working person';
const splitArr = statement.split(' ');
const revArr = splitArr.reverse();
const str = revArr.join(' ');
console.log(str);
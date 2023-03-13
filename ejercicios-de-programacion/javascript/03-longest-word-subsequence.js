/*
Given a string S and a set of words D, find the longest word in D that is a subsequence of S.
Word W is a subsequence of S if some number of characters, possibly zero, can be deleted from S to form W, without reordering the remaining characters.
Note: D can appear in any format (list, hash table, prefix tree, etc.
For example, given the input of S = "abppplee" and D = {"able", "ale", "apple", "bale", "kangaroo"} the correct output would be "apple"
The words "able" and "ale" are both subsequences of S, but they are shorter than "apple".
The word "bale" is not a subsequence of S because even though S has all the right letters, they are not in the right order.
The word "kangaroo" is the longest word in D, but it isn't a subsequence of S.
*/

// input
let S = “abppplee”;
let D = ["able", "ale", "apple", "bale", "kangaroo"];
// Output: apple

function findLongest(S, D){
	let longestWord = ‘ ’;
	for(let word of D){
	if( inSubsequence(word, S) && word.length > longestWord.length){
		longestWord = word;
}
}
return longestWord;
}
function inSubsequence(word, S){
	let i = 0;
let j = 0;
while(i < word.length && j < S.length){
	if(word[i]=== S[j]){
		i++;
}
j++;
}
return  i === word.length;
}
console.log(findLongest(S,D));

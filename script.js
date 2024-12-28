function firstNonRepeatedChar(str) {
 // Write your code here
	 const charcount={};
	for(let char of str){
		 charCount[char] = (charCount[char] || 0) + 1;
	}
	for(let char of str){
		if(charcount[char]===1){
			reutrn char;
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input));

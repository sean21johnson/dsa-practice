//Given a document, implement an algorithm to count the number of word occurrences
function countWords(str) {
    //declare an empty new string
    //loop through each character in the string passed in to check if it is in the alphabet or an empty space
        //if character is valid, pass it to the new string
    //if the character is not an alphabetic character or a ' ', do not push to the new string 
    //use toLowerCase to make the new string all lowercase characters
    //declare an empty frequency object
    //split the newString into an array with ' ' as the separator
    //loop through all of the elements in the string and add them to the frequency counter
        //if element does not exist, add it and a count of 1
        //if the element does exist, add 1 to the running count
    //return the frequency object
    
    str = str.toLowerCase();
    let newStr = '';
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    
    for (let i = 0; i < str.length; i++) {
        if (validChars.includes(str.charAt(i))) {
            newStr += str.charAt(i);
        }
    }

    let wordFrequency = {};
    const wordArray = newStr.split(" ");

    for (let word of wordArray) {
        if (!wordFrequency[word]) {
            wordFrequency[word] = 1;
        }
        else {
            wordFrequency[word]++;
        }
    }

    return wordFrequency
    
}

let sentence = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

console.log(countWords(sentence))

//Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list

//Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes

//Explain how a hash table works

/*
Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings, i.e., it returns 0 if both 
strings are the same, 1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.
*/

/*
Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. If no number in the list is 
repeated, then there is no mode for the list.
*/
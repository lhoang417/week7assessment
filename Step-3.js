function sumZero(nums){//created function called sumZero with parameter of nums array
    if(nums.length < 2){//if the length of the nums array is less than 2
        return false;//return false
    }
    for(let i = 0; i < nums.length; i++){ //use this loop to have 'i' represent the number we're evaluating
        for(let j = i+1; j < nums.length; j++){ // use to evaluate only the numbers that come after our nums[i] element
            console.log('i =' + i, 'j =' + j)
            if(nums[i]+nums[j]===0){//checking if an index + another index equals 0
            return true//return true
            }
        }
    }
    return false//return false
}
// console.log(sumZero([2,2, -2]))
//Eric advised this is O(n log n)


function isPangram(str){//created function called isPangram with a string parameter
    let string = str.toLowerCase()//variable called string using .lowercase() to change every letter to lowercase
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){//for loop with the argument of the variable char containing every letter of the alphabet
        if(!string.includes(char)){//if statement with condition that the string does not include every letter of char using !
           return false//return false
         }
      }
    return true//if above statement is not true, return true
  }

console.log(isPangram("I am not a robot"))
console.log(isPangram('The quick brown fox jumps over the lazy dog'))
//runtime on this function is O(n)




// function longestWord(arr){
//     let word = arr.split(' ')
//     for(let i = 0; i< arr.length; i++){
//         if (arr[i].length < word[i].length)
//         return word
//     }

// }

//found this online, trying to understand it...
const findLongest = words => Math.max(...(words.map(el => el.length)));
//Math.max() returns the largest of the numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.


console.log(findLongest(['word','twice','be']))
//I don't think this last function made any sense, but I tried to find the longest word out of the arr of words. My assumption would be it would be O(n) as it's just looping through the array of words to find the longest word.




function hasUniqueChars(str) {//function called hasUniqueChars with a str parameter
    let  newStr = new Set();//The Set object lets you store unique values of any type, whether primitive values or object references. It has some methods to add or to check if a property exist in the object.
    for (i=0; i<str.length; i++) {//iterate through the length of the str
      if (newStr.has(str[i])){//during every iteration, the has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not, in this case a letter of the string
      return false;//if statement above is true, return false 
     }else{//if statement above is not true
        newStr.add(str[i])//every iteration, we add the letter to our newStr obj
      }
     }
     return true;//return true
  }

console.log(hasUniqueChars('stroong'))
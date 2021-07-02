function sumZero(nums){//created function called sumZero with parameter of nums array
    let sum = 0//declaring that sum equals to 0
    for(let i = 0; i< nums.length; i++)//for loop to iterate through the length of the nums array
    if(nums[i] + nums[i] === sum){//my hope was for every iteration, an index of the array plus another index would equal to sum
        return true//if condition was true, return true
    }else{//else statement if condition above was false
        return false//if condition above was false, return false
    }

}
// console.log(sumZero([2,2, -2]))
//couldn't get this function to run properly but I would imagine it's O(^n) as I might be missing a nested loop


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




function longestWord(arr){
    let longestWord = arr[i].split('')
    for(let i = 0; i< arr.length; i++){
        if (arr[i].length > longestWord.length)
        return longestWord
    }

}
console.log(longestWord(['word','twice','be']))
//I don't think this last function made any sense, but I tried to find the longest word out of the arr of words. My assumption would be it would be O(n) as it's just looping through the array of words to find the longest word.
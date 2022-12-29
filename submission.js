const findSum = function(array) {
        return array.reduce((a,b) => a + b, 0); 
}; 


const findFrequency = function(array) {
    let mostFrequent;
    let leastFrequent;
    let countMost = 0; 
    let max = 0; 
    let countLeast = 0;   
    let min = Infinity; 
    
    for (let i=0; i<array.length; i++) {  
        for (let j=i; j<array.length; j++) {
                if (array[i] === array[j]) {
                    countMost++;
                    countLeast++; 
            }
            if (countLeast < min) {
                min = countLeast; 
                leastFrequent = array[i];
            } 
            if (max < countMost){
                max = countMost; 
                mostFrequent = array[i]; 
            } 
        }
      countLeast = 0;  
      countMost = 0;  
}
    return ('most frequent: ' + mostFrequent + ', least frequent: '+leastFrequent);     
}; 

 

const isParlindrome = function(str) {
    str = str.toLowerCase();
    let newStr = str.split('').reverse().join(''); 
    if (newStr === str)return true; 
    return false;
}; 

 
const largestPair = function(array) {
     let pair = -Infinity; 
     for (let i = 1; i < array.length; i++) {
         pair = Math.max(array[i] * array[i - 1], pair); 
     }
     return pair; 
}; 


const removeParenth = function(str) {
   str = str.toLowerCase(); 
    var newStrWithPareth = str.replace(/\(.*?\)/g, ''); 
    return newStrWithPareth;
};

const scoreScrabble = function(str) {
    let score = {'a':1, 'e':1, 'i':1, 'o':1, 'u':1, 'l':1, 'n':1, 'r':1, 's':1, 't':1, 'd':2, 'g':2, 'b':3, 'c':3, 'm':3, 'p':3, 'f':4, 'h':4, 'v':4, 'w':4, 'y':4, 'k':5, 'j':8, 'x':8, 'q':10, 'z':10}; 

    str = str.toLowerCase();
    var myScore = 0;
    
    for(let i = 0; i < str.length; i++) { 
        myScore += score[str[i]];  
        }
    return myScore;  
};

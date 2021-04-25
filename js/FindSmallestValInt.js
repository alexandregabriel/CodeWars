// URL - https://www.codewars.com/kata/55a2d7ebe362935a210000b2
// My first solution

/* class SmallestIntegerFinder {
    constructor(){
        this.findSmallestInt = a => a.sort((a,b) => a - b)[0]
    }
    
} */

// Community solution

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }
// URL => https://www.codewars.com/kata/555086d53eac039a2a000083 - Others solutions - https://www.codewars.com/kata/555086d53eac039a2a000083/solutions/javascript/all/best_practice

const lovefunc = (flower1, flower2) => (flower1 % 2 === 0 && flower2 % 2 === 0) || (flower1 % 2 === 1 && flower2 % 2 === 1) ? false : true;


/** Clever solution
 * 
 *  
 * function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
    } 
 */
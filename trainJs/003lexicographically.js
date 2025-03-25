/** 
 * Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:
 * firstAndLast(string) ➞ [first, last]
 * 
 * Examples
 * firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]
 * firstAndLast("bench") ➞ ["bcehn", "nhecb"]
 * firstAndLast("scoop") ➞ ["coops", "spooc"]
*/

function firstAndLast(s) {
    let text = s.split('');

    let changeLetter = text.map(function(element) {
        
        return element.charCodeAt();
    });

    let order = changeLetter.sort();
    // let reverse = order.reverse();
    console.log(order)
    
    let finalResult = String.fromCharCode(order)
    
    console.log(finalResult);
    

    // text.map((x) => changeLetter.push(x.charCodeAt()));
    // changeLetter.sort()
    // console.log(changeLetter);
    
}

firstAndLast("text")
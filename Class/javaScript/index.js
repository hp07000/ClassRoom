console.log("Hello JavaScript")
function findDifferences(a,b){
    if (a > b) {
        console.log("a is greater")
        return(a-b)
    }
    return(b-a)
}
console.log(findDifferences(100,15))
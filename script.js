function mincost(arr)
{ 
//write your code here
// return the min cost
let cost = 0;
let copyArr = [...arr]; // Create a copy of the original array

copyArr.sort((a, b) => b - a); // Sort the copy in descending order

while (copyArr.length > 0) {
    copyArr.sort((a, b) => b - a); // Sort the copy again in case it was modified
    let a = copyArr.length > 0 ? copyArr.pop() : 0; // Remove the last element from the copy
    let b = copyArr.length > 0 ? copyArr.pop() : 0; // Remove the new last element from the copy
    cost += a + b; // Update the cost
    if (a + b > 0) {
        copyArr.push(a + b); // Add the sum of the removed elements back to the copy
    }
}

return cost; // Return the final cost

}

module.exports=mincost;

function mincost(arr)
{ 
//write your code here
// return the min cost
let cost=0;
arr.sort((a, b) => b - a);

while(arr.length>0)
	{
		let temp=[];
		arr.sort((a, b) => b - a);
		let a= arr.length>0 ? arr.pop() : 0;
		let b= arr.length>0 ? arr.pop() : 0;
		cost+= a+b;
		if(a+b>0)
		{
			arr.push(a+b);
		}
	}
return  cost;
}

module.exports=mincost;

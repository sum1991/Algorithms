class rotatedElementSearch{

    constructor(){
    console.log("hello")
}

findingPivot(arr,low,high)
{
    if(high<low)
        return -1;
    if(high==low)
        return low;
    let mid = Math.floor((low+high)/2)
    if(mid<high && arr[mid] > arr[mid+1])
        return mid;
    if(mid>low && arr[mid] < arr[mid-1])
        return mid-1;
    if(arr[low]>=arr[mid])
        return this.findingPivot(arr,low,mid-1)
    
    return this.findingPivot(arr,mid+1,high)
}
binarySearch(arr,low,high,key){
if(high<low)
    return -1;
let mid = Math.floor((high+low)/2);
if(key == arr[mid])
{
    return mid;
}
if(key>arr[mid])
{
    return this.binarySearch(arr,mid+1,high,key)
}
return this.binarySearch(arr,low,mid-1,key)


}


}

let rotate= new rotatedElementSearch();
console.log(rotate.findingPivot([4,5,1,2,3],0,4))
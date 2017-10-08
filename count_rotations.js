class countRotations{
constructor()
{
    console.log("Counting the rotations in a array")
}
countRotateFunction(arr,low,high){

    if(high<low)
    {
        return -1;
    }
    if(high==low)
        return low;
    let mid =Math.floor((low+high)/2)
    if(mid<high && arr[mid]>arr[mid+1])
        return mid+1
    if(mid>low && arr[mid]<arr[mid-1])
        return mid
    if(arr[high]>arr[mid])
        return this.countRotateFunction(arr,low,mid-1)
    return this.countRotateFunction(arr,mid+1,high)
}


}
let arr = [15, 18, 2, 3, 6, 12]
let c = new countRotations();
console.log(c.countRotateFunction(arr,0,arr.length-1))


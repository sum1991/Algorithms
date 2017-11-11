var isValid = function(s) {
    let validate=true
    let charMap= new Map()
    charMap.set("}","{")
    charMap.set("]","[")
    charMap.set(")","(")
    let bracketArray=[]
    let i=0;
    let lastIndex=s.length-1;
    while(i<=lastIndex){
        if(charMap.has(s[i]))
        {
           let check =charMap.get(s[i]);
            if(check==(bracketArray.pop())){
                i++;
            }
            else{
                validate=false
                break;
            }
        }
        else{
        bracketArray.push(s[i])
        i++;
        }       
    }
    if(bracketArray.length>0 || s.length<=1)
        validate=false;
    return validate
};
console.log(isValid("[[["))
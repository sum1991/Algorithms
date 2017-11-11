var isValid = function(s) {
    let validate=true
    let charMap= new Map()
    charMap.set("{","}")
    charMap.set("[","]")
    charMap.set("(",")")
    charMap.set("}","{")
    charMap.set("]","[")
    charMap.set(")","(")
    let i=0;
    while(i<s.length){
     
           let check =charMap.get(s[i]);
            if(check==s[i+1]){
                i=i+2;
            }
            else{
                validate=false
                break;
            }
                
    }
    return validate
};
isValid("()")
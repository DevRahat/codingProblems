function checkName(yourName){
    if( typeof yourName !=='string'){
        return 'Invalid'
    }else{
    yourName=yourName.toLowerCase();

    const lastChar=['a,','y','i','e','o','u','w'];
    if(lastChar.includes(yourName.charAt(yourName.length -1))){
        return "Good Name";
    }else{
        return "Bad Name";
    }
    }
}

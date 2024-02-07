function password(obj){
    
    const siteName=obj.siteName;
    const name=obj.name;
    const birthYear=obj.birthYear;

    if(!obj.siteName ||!obj.name ||!obj.birthYear ){
        return "invalid";
    }
    if(obj.birthYear.toString().length !==4){
        return "invalid";
    }
    //took help from google
    const site=siteName.charAt(0).toUpperCase() +siteName.slice(1);
    const password=site+"#"+name+"@"+birthYear;
    return password;
}

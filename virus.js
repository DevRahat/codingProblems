function deleteInvalids(array){
    if(Array.isArray(array) ==false){
        return 'Invalid array'
    }
    // Took Help from Stack over flow 
        console.log(array.filter(item => typeof item === 'number'));
    }

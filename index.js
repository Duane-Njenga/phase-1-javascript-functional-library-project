function myEach(collection, callback){
    if(typeof collection === 'object'){
    let newCollection = Object.values(collection);
    
    newCollection.forEach(callback);
    
    }else {
        collection.forEach(callback);
    }
    return collection
}   

function myMap(collection, callback) {
    if(typeof collection === 'object'){
        collection = Object.values(collection);

        
        
    }return collection.map(callback);
}

function myReduce(collection, callback, acc) {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        collection = Object.values(collection);
    }

    if (arguments.length >= 3) {
        return collection.reduce((acc, value) => callback(acc, value, collection), acc);
    } else {
        return collection.reduce((acc, value) => callback(acc, value, collection));
    }
}

function myFind(collection, callback){
    if(typeof collection === 'object'){
        collection = Object.values(collection);
    
    }
    return collection.find(callback)

}

function myFilter(collection, callback){
    if(typeof collection === 'object'){
        collection = Object.values(collection);
    
    }
    return collection.filter(callback)  
}

function mySize(collection){
    if(typeof collection === 'object'){
        collection = Object.values(collection)
    }
    return collection.length;
}

function myFirst(array, n){
    if(n === undefined){
        return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n){
    if(n === undefined){
        return array[array.length - 1];
    }
    return array.slice(-n)
}

function myKeys(object){
    let keys = [];

    for(let key in object){
         keys.push(key);
    }
    return keys; 
}

function myValues(object){
    let values = [];

    for(let key in object){
         values.push(object[key]);
    }
    return values 
}
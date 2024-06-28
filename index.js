callback(spy);
function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    return function hook(){
        "before all"
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        "before all"
    }
}
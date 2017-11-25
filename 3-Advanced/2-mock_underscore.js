
const _ = {

    // produces new array of by mapping each value in a list thru a transformation function
    map: (list, iteratee) => {
        if(Array.isArray(list) && typeof iteratee === 'function'){
            for (let i = 0; i<list.length; i++){ list[i] = iteratee(list[i]); }
            return list;
        } else { return "Type error: Map function takes an array and callback"; }
    },

    // boils down a list of values into a single value
    reduce: (list, iteratee, memo) => {
        if(Array.isArray(list) && typeof iteratee === 'function'){
            let i = 0;
            if(!memo){ memo = list[0]; i = 1; }
            for(; i<list.length; i++){ memo = iteratee(memo, list[i]); }
            return memo;
        } else { return "Type error: Reduce function takes an array and callback (and optional initial value)"; }
    },

    // looks through each value, returning the first one that passes a truth test
    find: (list, predicate) => {
        if(Array.isArray(list) && typeof predicate === 'function'){
            for(let value of list){ if (predicate(value) === true){ return value; }}
            return undefined;
        } else { return "Type error: Find function takes an array and a callback"; }
    },

    // looks through list of values, returns array of values that pass a truth test
    filter: (list, predicate) => {
        if(Array.isArray(list) && typeof predicate === 'function'){
            let filtered = [];
            for(let value of list){ if(predicate(value)){ filtered.push(value); }}
            return filtered;
        } else { return "Type error: Filter function takes an array and callback"; }
    },

    // returns the values in a list without elements that the tuth test (predicate) passes
    reject: (list, predicate) => {
        if(Array.isArray(list) && typeof predicate === 'function'){
            let rejected = [];
            for(let value of list){ if(!predicate(value)){ rejected.push(value); }}
            return rejected;
        } else { return "Type errror: Reject function takes an array and callback"; }
    }

};

const array = [3,4,5];
// _.map(array, function(x) { return x * 5; });
// console.log(array);
// console.log(_.reduce(array, function(memo, x) { return x + memo; }));
// console.log(_.find(array, function(x) { return x === 5; }));
// console.log(_.filter(array, function(x) { return x < 20; }));
// console.log(_.reject(array, function(x) { return x < 20; }));
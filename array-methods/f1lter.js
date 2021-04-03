/**
 * arr.filter(callback(element[, index, [array]])[, thisArg])
 */

const arr = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

Array.prototype.f1lter = function(callback, thisArg) {
    if (this == null) {
        throw new Error("Can't iterate over undefined or null");
    }

    if (typeof callback !== 'function') {
        throw new Error("Callback is not a function");
    }

    const result = [];
    let context = this;
    let obj = Object(this);

    if (arguments > 1) {
        context = thisArg;
    }

    for (let i = 0; i < obj.length; i++) {
        if (i in obj) {
            const current = this[i];

            if (callback.call(context, current, i, obj)) {
                result.push(current);
            }
        }
    }

    return result;
};

const prime = arr.f1lter(isPrime);

console.log(prime);

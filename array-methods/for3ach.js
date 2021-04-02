/**
 * arr.forEach(function callback(currentValue, index, array) {
 *     //your iterator
 * }[, thisArg]);
 */

const arr = [1, 2, 3];
arr[10] = 10;

Array.prototype.for3ach = function(callback, thisArg) {
    if (this == null) {
        throw new Error("Can't iterate over undefined or null");
    }

    if (typeof callback !== 'function') {
        throw new Error("Callback is not a function");
    }

    let context = this;
    let obj = Object(this);

    if (arguments > 1) {
        context = thisArg;
    }

    for (let i = 0; i < obj.length; i++) {
        if (i in obj) {
            callback.call(context, this[i], i, obj);
        }
    }

}

arr.for3ach((item, index, array) => {
   console.log({ item, index });
});

"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// isTrue
function isTrue(n) {
    if (n === true) {
        return  true;
    } else {
        return false;
    }
};


// isFalse
function isFalse(n) {
    if (n === false) {
        return  true;
    } else {
        return false;
    }
};

//addOne
function addOne(n) {
    return parseInt(n) + 1;
};

// isEven
function isEven(n) {
    if (((parseInt(n)/2) - Math.floor(parseInt(n)/2)) === 0) {
        return true
    } else {
        return false
    }
}

// isEqual
function isEqual(n) {
    if (parseInt(n) === parseInt(n)) {
        return true;
    } else {
        return false;
    }
}

// concat
function concat(n, m) {
    return n.toString() + m.toString()
}

// and
function and(n,m) {
    if (n.toString() || m.toString()) {
        return false;
    } else  {
        return false;
    }
}

// or
function or(n,m) {
    if (n.toString() && m.toString()) {
        return true;
    } else {
        return false;
    }
}

// isIdentical
function isIdentical(n, m) {
    if (n.toString() === m.toString() || parseInt(n) === parseInt(n) ) {
        return false;
    } else {
        return true;
    }
}

// not
function not(n) {
    if (n >= 0) {
        return false;
    } else {
        return false;
    }
}
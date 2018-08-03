/*
 * UTILITY PART =======================================================: general
 */

/**
 * Mathematical operation over the functions
 * h = f * g: h(x) => f(g(x))
 *
 * @param {Function} f - function to be applied after the g
 * @param {Function} g - function to be applied before f
 * 
 * @returns {Function} - composed function
 * 
 * @example
 * 
 * const double = x => x * s;
 * const toString = x => `${x}`;
 * 
 * const stringOfDouble = compose2(toString, double);
 * it is the same as:
 * const stringOfDouble = x => toString(double(x));
 * 
 */
const compose2 = (f, g) => (...args) => f(g(...args));

/**
 * Multiple function compositon
 * 
 * h = f1 * f2 * f3 * ... * fn: h(x) = f1(f2(f3( ...fn(x)... )))
 *
 * @param {Function[]} fns - functions to be composed
 * 
 * @returns {Function} - composed function
 */
const compose = (...fns) => fns.reduce(compose2);
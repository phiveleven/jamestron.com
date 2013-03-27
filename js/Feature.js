/*! jamestron.com 
License: As-is software (you own all the risk if you use it) */

recognize ( 'number' == typeof +Feature({}), ': feature number');
recognize ( 'string' == typeof Feature('something'), ': feature name');


/** @constructor */
function Feature (name, something) { }

Feature.prototype.toString = function(){ return this.name };
Feature.prototype.valueOf = function(){ return this.length };


// include (recognize.js)

/*! jamestron.com/recognize.js
 *  @darkgoyle circa 2012
 */

// debug
var debug = !0;

function recognize(something){ if (debug)
  // output
  console
  // delivery method based on truthiness of 'something'
  // TODO add delta and warn,debug,dir
    [ ['error','info'] [+!!something] ] (
        // a brute join
        [].join.call(arguments,' ')); }


// load test framework (qunit)
$('<script>', { src: 'http://code.jquery.com/qunit/qunit-1.10.0.js'})
  .add($('<link>', { rel:'stylesheet',
                     href: 'tests/qunit-console.css' }))
  .add($('<link>', { rel:'stylesheet',
                     href: 'http://fonts.googleapis.com/css?family=Electrolize' }))
  .appendTo('head');

$(function () {
  $.getScript('tests/all-tests.js');
});

// create qunit container
$($('<section>', { id: 'qunit' }))
  .insertAfter('script:last').hide();
$($('<section>', { id: 'qunit-fixture' }))
  .insertAfter('script:last').hide();

// toggle qunit with esc
$(document).on('keyup',function(e){ if (e.keyCode==27) $('#qunit').toggle() })

// TODO issues/17

// test tests  
try { throw 'ಠ_ಠ' }
catch (e){
  if (debug) recognize ('My name is Tron. James Tron.') 
  else console.warn(e);
}




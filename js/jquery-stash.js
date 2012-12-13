/*! phiveleven.com/jquery.stash */
// storage facade
$.fn.stash = function(place, thing){
  //  TODO restore from localStorage, sessionStorage and webStorage
  // volatile fella
  var storage = $.Warehouse = {};
  // keep thing?
  if (typeof thing != 'undefined')
    $.Warehouse[place] = thing;
    
  // $ if write, thing if read! (like fn.data)
  return thing? this : $.Warehouse[place]; 
};

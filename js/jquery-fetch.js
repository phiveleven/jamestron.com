/*! phiveleven.com/jquery.fetch */
$.fetch = function (feature){
  $.fetch.features = $.fetch.features || {};
  $.fetch.pending = $.fetch.pending || {};
  
  // prepare and make content request
  var url = feature.replace(/^(feature\/)?.+(\.\w+)?$/, function(path,feature,extension){
    return extension || 
      'feature/' + path + '.html';
    // cache buster?
  }) + '?'+ (+new Date).toString(36),
      promise = $.ajax({ url: url, dataType:'text' })
        .done(resolve)
        .fail(console.error);
  
  // load content into document
  function resolve(html){
    var config = $.fetch.pending[feature];
    if (config) {
      $.fetch.features[feature] = $(html)[config.method](config.selector);
      delete $.fetch.pending[feature];
      debug && console.debug(feature, config.method, config.selector);
    }
  }
  
  // bind deferred methods to promise
  'prependTo appendTo insertBefore insertAfter replaceAll'.replace(/\S+/g, function(method){
    promise[method] = (function(){
      return function(selector){
        $.fetch.pending[feature] = { method: method, selector: selector };
      };
    })(method);
  });
  
  $(document).trigger('new.feature.'+feature, feature);
  return promise;
};

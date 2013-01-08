/*!
  James Tron Library
  http://jamestron.com
*/

;(function($) {
  $.fn.tron = function(map) {
    var nodes = this;
    return this.each(function() {
      $.each(map, function(action,handler){
        $(nodes).on(action, handler);
      });
    });
  };
  $.fn.troff = function(map) {
    var nodes = this;
    return this.each(function() {
      $.each(map, function(action,handler){
        $(nodes).off(action);
      });
    });
  };
})(jQuery);

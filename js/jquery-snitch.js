/*! phiveleven.com/jquery.snitch */
// send data changes upstream
$.fn.snitch = function snitch(){
  debug && console.warn('setup snitch for', this);
  return this.each(function(){
    $(this)
      // comptroller
      .filter('form').submit(function(){
        debug && console.dir($(this).data());
        return false;
      }).end()
      
      // ears
      .on('change', '[data]', function(){
        // go up the chain
        var ears = $(this).closest('[data]').add(this.form).eq(0), // [data] bubbles up, [data~=?] jumps
            drop = ears.attr('data') || ears.attr('action'),
            payload = $(this).data();
//debug && console.info(this, 'up the chain', payload, drop, ears)
        // if news
        if (ears.data(drop) == 'undefined')
            ears.data(drop, payload);
        // else concat
        else ears.data(drop, [].concat([ears.data(), payload]))
      })
      
      // snitch
      .find('[name]').each(function snitch_setup(){
        var ears = $(this).closest('[data]').add(this.form).eq(0);
        debug && console.debug(this.id || this.name, 'is a mole for', ears);
        // setup event
        $(this).change(function(){ 
          if (!this.readonly) {
            var data = ears.data();
            ears.data(this.name, data);
//debug && console.warn(this.name, 'squealed', ears.data());
          }
        });
      }).end();
  });
};

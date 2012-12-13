/*! phiveleven.com/jquery.mangle */
// tamper with [data]
$.fn.mangle = function(mangler){
  console.debug('mangle: ', this, mangler);
  // no [data]? do nothing
  return this.filter('[data]').each(function(){
    // holder of the datas, yo
    var holder = $(this),
        data = holder.data();
    console.log(holder, data)
      // store unmangled as JSON string in [data-src]
    holder.find(':not([data-stash])')
      // like fn.data but awesomer
      .stash('data-unmangled', holder.data())
      .attr('data-stash', true).end()
      // replace data with mangled doppleganger
      .removeData().data(
          // apply lambda to data
          $.each(holder.data(), mangler) );
  }).end();
};

// restore original witness
$.fn.unmangle = function(){
  return this.each(function(){
    var holder = this;
    holder.data(holder.stash('data-stash'));
    return holder;
  });
};

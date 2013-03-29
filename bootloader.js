var status = { test: true };

if (status.test)
  	console.log('load jQuery'); // Removing this log causes getScript not to fire in Chrome??
  	getScript('ext/jquery-1.9.1.min.js', function() {
      console.log('jQuery might be loaded');
  	});
  	  


function getScript(url, done) {
		var script = document.createElement('script');
		script.src = url;

		var body = document.getElementsByTagName('body')[0];
		body.appendChild(script);
		
		done();
};

  
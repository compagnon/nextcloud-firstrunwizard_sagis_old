function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
	setTimeout(function() {
		OCP.Loader.loadScript('firstrunwizard', 'firstrunwizard.js').then(function() {
			OCA.FirstRunWizard.open();
		});
	}, 100);
})

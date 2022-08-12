$(document).ready(function () {
	$.getScript( "js/load-files.js" ) //Load a script using jquery
  .done(function( script, textStatus ) {
    	console.log( textStatus );
  	})
  .fail(function( jqxhr, settings, exception ) {
		console.log('Error loading load-files.js file !');
	});
})
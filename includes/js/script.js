/*

My Custom JS
============


*/

/*关于点击button，弹出alert的框子*/
$(function(){

	$('#alertMe').click( function(e){
		e.preventDefault();

		$('#successAlert').slideDown();
	});	


	$(document).ready(function(){
		$('[data-toggle="popover"]').popover();
	});

	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});

});



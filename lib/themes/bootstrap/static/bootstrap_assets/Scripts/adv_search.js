/**************************
 Script to add the bootstrap
 form classes to the eprints
 workflow
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	//add the classes to make the form look right. lots of form control stuff. Using col- stuff instead of form-groups as eprints loves tables, and the second tr for the help breaks it all if you dont do it this way
	j('.ep_search_fields .ep_multi_input').closest('form').addClass('form-inline row');	
	j('.ep_search_fields .ep_multi_input').addClass('col-md-10');	
	j('.ep_search_fields .ep_multi_help').addClass('col-md-1');
	j('table.ep_search_fields th').addClass('col-md-2');
	j('table.ep_search_fields').addClass('table');
	j('.ep_search_fields .ep_multi_input select,.ep_search_fields .ep_multi_input input').addClass('form-control');	

	//remove the old styling elements and allow the bs table to do it instead
	j('.ep_search_fields .ep_multi_input').removeClass('ep_multi_input');	
	j('.ep_search_fields .ep_multi_heading').removeClass('ep_multi_heading');	
	j('.ep_search_fields .ep_multi_help').removeClass('ep_multi_help');	

	//style the buttons and text at the top byt putting them in a well, as search controls also go in one
	j('.ep_search_buttons:first').prev().andSelf().wrapAll('<div class="well well-sm"><div class="text-center"></div></div>');
	j('.ep_search_buttons:last').wrapAll('<div class="well well-sm"><div class="text-center"></div></div>');
	j('.ep_search_buttons').removeClass('ep_search_buttons');	


	

});

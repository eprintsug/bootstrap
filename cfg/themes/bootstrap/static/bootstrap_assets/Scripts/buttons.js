/**************************
 Script to turn eprints 
 buttons  into bootstrap 
 default buttons 
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	var buttons_1 = j('.ep_action_list .ep_form_action_button, .ep_form_action_button, .ep_blister_node_selected, .ep_form_internal_button');
	var buttons_2 = j('.ep_blister_node');
	buttons_1.addClass('btn btn-primary').removeClass('ep_form_action_button');
	buttons_2.addClass('btn btn-default').removeClass('ep_form_action_button');

});

/**************************
 Update workflow icons to 
 Glyphicons (from bootstrap)
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	j('img[src="/style/images/required.png"]').replaceWith('<span class="glyphicon glyphicon-star-empty"></span>');
	j('.ep_sr_show_help img').replaceWith('<span class="glyphicon glyphicon-question-sign"></span>');
	j('.ep_sr_hide_help img').replaceWith('<span class="glyphicon glyphicon-minus-sign"></span>');
	updateWorkflowIcons();
});


function updateWorkflowIcons (){

	j('img[src="/style/images/required.png"]').replaceWith('<span class="glyphicon glyphicon-star-empty"></span>');
        j('.ep_sr_show_help img').replaceWith('<span class="glyphicon glyphicon-question-sign"></span>');
        j('.ep_sr_hide_help img').replaceWith('<span class="glyphicon glyphicon-minus-sign"></span>');

	j('img[src="/style/images/multi_up.png"]').replaceWith('<span class="glyphicon glyphicon-collapse-up"></span>');
	j('img[src="/style/images/multi_down.png"]').replaceWith('<span class="glyphicon glyphicon-collapse-down"></span>');
}

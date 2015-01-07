/**************************
 Script to turn eprints 
 buttons  into bootstrap 
 default buttons 
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	updateButtons();

	//j('a[href$="ep_tabs_current=Admin%3A%3AEPM%3A%3AAvailable"]').attr('onclick','').unbind('click');

});

function updateButtons() {

	var btn = j('input[type="submit"], input[type="button"], button').not('.btn');
        var btn_dflt = j('.ep_blister_node');
	var btn_save = j('input.ep_form_action_button[name$="_action_save"]'); 
	var btn_canc = j('input.ep_form_action_button[name$="_action_stop"]'); 
	var btn_prim = btn.not(btn_dflt).not(btn_save).not(btn_canc);

	btn.addClass('btn').removeClass('ep_form_action_button');
        btn_prim.addClass('btn btn-primary');
        btn_dflt.addClass('btn btn-default');
	btn_save.addClass('btn-success');
	btn_canc.addClass('btn-danger');
}

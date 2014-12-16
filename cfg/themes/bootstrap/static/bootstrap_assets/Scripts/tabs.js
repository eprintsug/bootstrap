/**************************
 Script to make all desired  
 tabs styled by docklands 
 rather than eprints css
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	//all the tabs that we want to change to bootstrap style
	var tabs = j('#ep_tabs_tabs, #ep_admin_tabs_tabs, #ep_workflow_views_tabs, #ep_eprint_view_tabs,#ep_eprint_views_tabs #_tabs, .ep_eprint_views_tabs, .ep_tab_bar');
	tabs.addClass('nav-justified').children().css('width','');
	var selected_tabs = j('.ep_tab_selected');
	var li_tabs = j('#ep_tabs_tabs li, #ep_admin_tabs_tabs li, #ep_workflow_views_tabs li, #ep_eprint_view_tabs li, #_tabs li, .ep_tab_bar li');

        
	//remove the eprint classes and add the bootstrap classes
	tabs.removeClass('ep_tab_bar').addClass('nav nav-tabs');
	selected_tabs.addClass('active');
	li_tabs.click(function() {
		li_tabs.removeClass('active');
		j(this).removeClass('ep_tab_selected').addClass('active');
	});


});

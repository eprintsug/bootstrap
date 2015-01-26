/**************************
 Script to change eprint  
 login menu to bootstap 
 nav-stacked
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	//search_controls
        var ep_search_controls = j('.ep_search_controls, .ep_search_controls_bottom, .ep_view_group_by');
        ep_search_controls.addClass('well well-sm ep_block').removeClass('ep_search_controls');

});

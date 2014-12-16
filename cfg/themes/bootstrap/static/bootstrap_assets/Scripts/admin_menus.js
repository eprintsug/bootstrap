/**************************
 Boot strap the admin menu
 by adding row and cols 

***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	// The dl dt and dd that will be moved into columns
	var ep_dls = j('#ep_admin_tabs_panels dl, #ep_eprint_view_panels dl');
	var ep_dts = j('#ep_admin_tabs_panels dl dt, #ep_eprint_view_panels dl dt');
	var ep_dds = j('#ep_admin_tabs_panels dl dd, #ep_eprint_view_panels dl dd');
		
	// add the columns
	ep_dls.addClass('row').removeClass('ep_action_list').css('margin-top','1em');
	ep_dts.addClass('col-md-offset-0 col-md-4 col-sm-4 col-xs-4 text-right ');
	ep_dds.addClass('col-md-8 col-sm-8 col-xs-8').css("min-height","3em");

});

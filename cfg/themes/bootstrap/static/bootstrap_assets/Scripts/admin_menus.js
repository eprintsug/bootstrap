/**************************
 Boot strap the admin menu
 by adding row and cols 

***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	j('#ep_admin_tabs_panels dl').addClass('row').removeClass('ep_action_list');
		j('#ep_admin_tabs_panels dl dt').addClass('col-md-offset-0 col-md-4 col-sm-4 text-right ');
	j('#ep_admin_tabs_panels dl dd').addClass('col-md-8 col-sm-8').css("min-height","3em");

});

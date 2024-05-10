/**************************
 Script to change and 
 bootstrap  the userside 
 tables.

***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	j("table *[class^='ep_columns']").removeClass(function (index, css) {
	    return (css.match(/(^|\s)ep_columns\S+/g) || []).join(' ');
	});

	j('table.ep_columns').addClass('table table-bordered');	
	j('table.ep_columns tr.header_plain, table.ep_columns > tbody > tr:last').addClass('active');
	j('table.ep_columns tr.header_plain th').css('padding','');
	j('table td:contains("Live Archive")').parent().addClass('success'); 
	j('table td:contains("Under Review")').parent().addClass('info'); 
	j('table td:contains("User Workarea")').parent().addClass('warning'); 
});

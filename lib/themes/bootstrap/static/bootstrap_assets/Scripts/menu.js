/**************************
 Script to change eprint  
 login menu to bootstap 
 nav-stacked
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	//Clones the EP menu to the top menu. 
	j('#main_page .ep_tm_key_tools').clone().appendTo('#login_status');
	//Then remove the old class, and add the navbar classes to make it fit in. 
	j('header .ep_tm_key_tools').removeClass('ep_tm_key_tools').addClass('nav navbar-nav navbar-right').attr('id','ep_menu_top');
	// remove the first part of the menu if you are already signed in (as the span buggers up the nice navbar menu)
	j('header #ep_menu_top li:first-child').has("span").remove();
	

	//left hand side menu. Adds the id, then the needed classes for bootstrap to style the menu 
	j('#main_page .ep_tm_key_tools').removeClass('ep_tm_key_tools').attr('id','ep_menu').addClass('hidden-xs');
	j('#main_page ul#ep_menu ').addClass('list-group');
	j('#main_page ul#ep_menu li').addClass('list-group-item');
	j('#main_page ul#ep_menu li:first-child:contains("Logged")').addClass('active');
	j('#main_page ul#ep_menu li:first-child span a').addClass('list-group-item-text');

	// If the user isn't logged in, style it a little
	//j('#main_page ul#ep_menu li:first-child a[href$="cgi/users/home"]').addClass('list-group-item-heading');
	var log_in_btn = j('#main_page ul#ep_menu li:first-child a[href$="cgi/users/home"]');
	log_in_btn.addClass('btn btn-primary');
	log_in_btn.closest('li').removeClass('list-group-item');
	log_in_btn.closest('ul').removeClass('list-group').addClass('list-unstyled');


});

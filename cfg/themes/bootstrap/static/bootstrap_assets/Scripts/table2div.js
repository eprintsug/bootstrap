/**************************
 Script to change eprint  
 login menu to bootstap 
 nav-stacked
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {


	// Change login page to use inline form
	var pathname = window.location.pathname;
	if (pathname == "/cgi/users/login"){ 
	j('form[action="/cgi/users/login"] table').replaceWith( j('table').html()
	   .replace(/<tbody/gi, "<div class='table2div'")
	   .replace(/<tr/gi, "<div class='form-group'><div class='input-group'")
	   .replace(/<\/tr>/gi, "</div></div>")
	   .replace(/<td/gi, "<div")
	   .replace(/<\/td>/gi, "</div>")
	   .replace(/<\/tbody/gi, "<\/div")
	);

	j('.table2div').parent().parent().addClass('form-inline');
	j('.table2div input').addClass('form-control');
	j('.table2div .input-group div:contains("Username:"), .table2div .input-group div:contains("Password:")').addClass('hidden');

	var loginBtn = j('.table2div .input-group input[value="Login"]');
	loginBtn.remove();
	j('.table2div').append(loginBtn);

	j('.table2div .form-group:first-child input').attr("placeholder","Username");
	j('.table2div .form-group:nth-child(2) input').attr("placeholder","Password");

	}
});

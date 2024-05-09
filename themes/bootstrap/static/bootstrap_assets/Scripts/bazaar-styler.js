/**************************
 bazaar styler 

***************************/
var j = jQuery.noConflict();

j(document).ready(function () {
	
	j("div[id$='Available']").addClass('baz_available');

	j(".baz_available")
	.observe('childlist', "div[id$='Available_results']", function(record) {
	        console.log("mut");
		updateButtons();
		wellBazaar();
		updateWorkflowIcons();
	});

	defaultBazaar();
	
});

function defaultBazaar() {

        var bazdivs = j("div[id$='Installed'] > div, div[id$='Developer'] > div");
        for (var i = 0; i < bazdivs.length; i += 3) {
                bazdivs.slice(i, i + 3).wrapAll("<div class='well well-sm'></div>");
        }
}

function wellBazaar() {

	var bazdivs = j("div[id$='Available_results'] > div");
        for (var i = 0; i < bazdivs.length; i += 3) {
        	bazdivs.slice(i, i + 3).wrapAll("<div class='well well-sm'></div>");
	}
}

/**************************
 bazaar styler 

***************************/
var j = jQuery.noConflict();

j(document).ready(function () {
        
	j("main").poink({
	  selector: ".ep_form_action_button",
	  callback: function(element) {
		updateButtons();
		wellBazaar();
  	  }
	});	
	
});

function wellBazaar() {

	var bazdivs = j("div[id$='Available_results'] > div");
	console.log(bazdivs);
        for (var i = 0; i < bazdivs.length; i += 3) {
        	bazdivs.slice(i, i + 3).wrapAll("<div class='well well-sm'></div>");
	}
}

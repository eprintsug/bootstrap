/**************************
 Script to convert EPrint 
 front page boxes into 
 Bootstrap panels 
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	//initialisting	
	var panel = j('.ep_toolbox');	
        var pathname = window.location.pathname;
	var unwrap = j('.ep_toolbox_content');
	var panelHeading = j('.ep_toolbox a'); 
	//console.log(pathname);		

	//front page
	if (pathname == "/"){
	if (j('.ep_toolbox_content b').length){
		j('.ep_toolbox_content b').wrap('<div class="panel-body"></div>');
		
	}else {
		j('.ep_toolbox_content').contents().each(function(){
			 if(this.nodeName == "#text" && j.trim(this.nodeValue) !== ''){
        			j(this).wrap('<div class="panel-body"><p></p></div>');
    			} 
		});
	}}
	
	//remove that b and replace with strong
	j('.ep_toolbox_content b').replaceWith(function(){
		return j('<strong>').html(j(this).html());
	});

	if (!pathname.match("^/view/creators/")){
	
	//front page panel headings
	panelHeading.wrap('<div class="panel-heading"><h3 class="panel-title"></h3></div>');
	
	// Removing some stuff that isnt needed
	panel.find('br').remove();
	
	//unwrapping it
	unwrap.children().unwrap();

	}
	//j('.panel .panel-body p').is(':empty').remove();

	//front page only stuff
	if (pathname == "/"){
		//add the classes and the wrappers	
		panel.addClass('panel panel-default p');
		panel.removeClass('ep_toolbox').addClass('frontpage-panel');
	}


	var summary_panel = j('.ep_summary_box');
	var summary_panel_header = j('.ep_summary_box .ep_summary_box_title');
	var summary_panel_body = j('.ep_summary_box_body');

	summary_panel.parent().addClass('panel panel-default');
	summary_panel.removeClass('ep_summary_box');
	summary_panel_header.addClass('panel-heading').removeClass('ep_summary_box_title');
	summary_panel_body.addClass('panel-body').removeClass('ep_summary_box_body');


	//Convert /view/creator toolbox into well-sm

	if (pathname.match("^/view/creators/")){
		j('.ep_toolbox').addClass('well well-sm ep-block').removeClass('ep_toolbox');
		j('.ep_toolbox_content').addClass('text-center').removeClass('ep_toolbox_content');
	}
});


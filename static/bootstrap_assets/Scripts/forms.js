/**************************
 Script to add the bootstrap
 form classes to the eprints
 workflow
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	// textarea stylings
	j('.ep_sr_component textarea').addClass('form-control');	
	
	//name entry style stuff (work in progress...)
	//j('.ep_form_input_grid input.ep_form_text').addClass('form-control');	
	
	//Select. Using the jquery selector here to only select dvisions as i'm worried about styling ALL selects in eprints
	j('select[id$=divisions]').addClass('form-control');	
	
	// bootstrap radiobuttons
	j('input:radio').parent().parent().addClass("radio")

	//j('select[id$=divisions]').addClass('form-control');	
	j('.ep_form_input_grid select').addClass('form-control');	
	
	//j('.ep_form_field_input .ep_sr_component').addClass('panel panel-default').removeClass('ep_sr_compenent');

	// Style the collapses bars to look okay
	j('.ep_sr_component .ep_sr_collapse_bar').addClass('panel-heading').removeClass('ep_sr_collapse_bar');




	//import form
	j('form table td:contains("Import from")').closest("form").addClass('form-inline import-form');
	j('.import-form select').addClass('form-control').wrap('<div class="form-group"></div>');

	
	//add column form
	j('.ep_columns_add form').addClass('form-inline').children().wrap('<div class="form-group"></div>');
	j('.ep_columns_add form select').addClass('form-control');

	//simple search form
	j('main form[action="/cgi/search/simple"]').addClass('form-inline search-form');
	j('.search-form input[name="q"]').addClass('form-control').attr('placeholder','Search the repository').wrap('<div class="form-group"></div>');

	//more of the workflow bootstrapped		
	j('table.ep_form_input_grid input[type="text"]').addClass('form-control');
	j("[id$='pagerange_to']").parent().addClass('form-inline')
	
/* This is too slow to be useful especially in situations where the workflow is dynamic (ie documents) */
/*
	j(".ep_form_field_input")
        .observe('childlist', ".epjs_ajax", function(record) {
              console.log("mut:"+record);
                updateButtons();
		j(this).closest('table').addClass('ajaxedTable');
		j('table.ajaxedTable tr td input:not(.form-control)').not('.ep_form_internal_button').addClass('form-control');
        });
*/

	

});

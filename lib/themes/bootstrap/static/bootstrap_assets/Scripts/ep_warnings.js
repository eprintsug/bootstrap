/**************************
 Script to boostrapify 
 warnings

***************************/
var j = jQuery.noConflict();

j(document).ready(function () {
	
	
	j('#ep_messages .ep_msg_warning').each( function(i) {
		console.log( "warning_table_"+i);
		j(this).find('table').attr('id',"warning_table_"+i);
	});

	j('.ep_msg_message').each( function(i) {
                console.log( "message_table_"+i);
                j(this).find('table').attr('id',"message_table_"+i);
        });

	j('table[id^="warning_table_"]').each( function(i) {
                console.log( "table_"+i);
		j(this).replaceWith(j(this).html()
			.replace(/<tbody/gi, "<div class='ex-table'")
		           .replace(/<tr/gi, "<div class='panel panel-danger'")
        		   .replace(/<\/tr>/gi, "</div>")
		           .replace(/<td/gi, "<div class=''")
		           .replace(/<\/td>/gi, "</div>")
		           .replace(/<\/tbody/gi, "<\/div")
        	);
	});

	j('table[id^="message_table_"]').each( function(i) {
                console.log( "table_"+i);
                j(this).replaceWith(j(this).html()
                        .replace(/<tbody/gi, "<div class='ex-table'")
                           .replace(/<tr/gi, "<div class='panel panel-success'")
                           .replace(/<\/tr>/gi, "</div>")
                           .replace(/<td/gi, "<div class=''")
                           .replace(/<\/td>/gi, "</div>")
                           .replace(/<\/tbody/gi, "<\/div")
                );
        });
	
	j('.ex-table .panel').find('div:nth-child(1)').addClass('panel-heading');
	j('.ex-table .panel').find('div:nth-child(2)').addClass('panel-body');
	j('.ex-table').unwrap();
	
	
	j('.ex-table .panel-heading img').each(function () {

		var msg_text = j(this).attr('alt');
		j(this).replaceWith('<h4 class="panel-title">'+msg_text+':</h4>');
		console.log(msg_text);
	});

});

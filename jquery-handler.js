jQuery(function ($) {
	$.each(['loading', 'complete'], function(i, eventName){
		$('['+eventName+']').each(function(index, el){
			var new_el = $(el);
			new_el.bind('ajax:'+eventName, function(xhr){
				eval(new_el.attr(eventName));
			});
		});
	});
	
	$('[success]').each(function(index, el){
		var new_el = $(el);
		new_el.bind('ajax:success', function(xhr, body, status){
			eval(new_el.attr('success'));
		});
	});
	
	$('[failure]').each(function(index, el){
		var new_el = $(el);
		new_el.bind('ajax:failure', function(xhr, status, error){
			eval(new_el.attr('failure'));
		});
	});
});
$.each(['loading', 'success', 'complete', 'failure'], function(i, eventName){
	$('['+eventName+']').each(function(index, el){
		var new_el = $(el);
		new_el.bind('ajax:'+eventName, function(xhr){
			eval(new_el.attr(eventName));
		});
	});
});
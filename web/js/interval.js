function checkInterval(parameters) {
	var startDate = parameters.startDate;
	var endDate = parameters.endDate;
	var intervalAmount = parameters.intervalAmount;
	var intervalField = parameters.intervalField;
	var offsetAmount = parameters.offsetAmmount;
	var offsetField = parameters.offsetField;
	var strict = parameters.strict;
	var values = parameters.values;
	
	startDate.setDate(startDate.getDate() - 1);
	var previousInterval = new Date(startDate.getTime());
	$(values).each(function(index, value) {
		var currentInterval = new Date(value[0].substring(0,4), value[0].substring(4,6)-1, value[0].substring(6));
		var intermediateInterval = new Date(previousInterval.getTime());
		while (intermediateInterval.setDate(intermediateInterval.getDate() + intervalAmount) < currentInterval) {
			renderMissing(intermediateInterval);
			previousInterval = intermediateInterval;
		}
		renderValue(value);
		previousInterval = currentInterval;
	});
	
	var currentInterval = new Date(endDate.getTime());
	var intermediateInterval = new Date(previousInterval.getTime());
	while (intermediateInterval.setDate(intermediateInterval.getDate() + intervalAmount) < currentInterval) {
		renderMissing(intermediateInterval);
		previousInterval = intermediateInterval;
	}
}

function renderValue(value) {
	$('#output').append(value[0] + ' Value!<br/>');
}

function renderMissing(value) {
	$('#output').append(value.getFullYear()+''+value.getMonth()+1+''+value.getDate() + ' Missing!<br/>');
}
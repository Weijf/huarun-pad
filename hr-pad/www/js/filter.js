angular.module('filter', [])

.filter('FormatDate', function() {
	return function(input) {
		var date = new Date(input);
		var formatDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		return formatDate
	}
})

.filter("long", function() {
	return function(name) {
		var len = name.info;
		if(len.length > 20) {
			return true;
		} else {
			return false;
		}
	}
});
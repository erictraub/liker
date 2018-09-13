app.controller('LandingController', function ($scope) {
	console.log('landing ctrl works')
	$scope.click = function() {
		console.log('CLICKED');
	};

	$scope.name = 'ERIC';
});
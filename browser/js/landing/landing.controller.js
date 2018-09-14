app.controller('LandingController', function ($scope) {
	console.log('landing ctrl works');
	chrome.cookies.getAll({domain: "instagram.com"}, function(cookies) {
	  console.log('COOKIES HERE: ', cookies);
	});

    chrome.storage.local.get(null, function (result) {
	    console.log("CHANELS: ", result);
    });
});



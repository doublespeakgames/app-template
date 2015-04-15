requirejs.config({
	baseUrl: "js/lib",
	shim: {
		"google-analytics": {
			exports: "ga"
		}
	},
	paths: {
		app: "../app",
		"google-analytics": [
	        "http://www.google-analytics.com/analytics",
	        "analytics"
        ]
	}
});

// Load the main module to start the game
requirejs(["app/main"]);
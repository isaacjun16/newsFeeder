(function(){
	"use strict";

	angular
		.module("NewsFeeder", ["ui.router"])
		.config(config);

	config.$inject = ["$stateProvider", "$urlRouterProvider"];
	function config($stateProvider, $urlRouterProvider){
		$stateProvider.
			state("home", {
				url : "/home",
				views : {
					nav : {
						controllerAs : "nav",
						controller : "NavController",
						templateUrl : "views/main/nav.view.html"
					},
					footer : {
						controllerAs : "ft",
						controller : "FooterController",
						templateUrl : "views/main/footer.view.html"
					},
					content : {
						pageTitle : "Home",
						controllerAs : "vm",
						controller : "HomeController",
						templateUrl : "views/home/home.view.html"
					}
				}
			});
		$urlRouterProvider.otherwise("/home");
	}
})();

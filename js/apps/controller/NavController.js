(function(){
	"use restrict"

	angular
		.module("NewsFeeder")
		.controller("NavController", NavController);

	NavController.$inject = ["$state"];
	function NavController($state){
		var nav = this;

		initController();

		function initController(){
			console.log("initNavController");
		}
	}
})();

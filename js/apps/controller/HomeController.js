(function(){
	"use strict";

	angular
		.module("NewsFeeder")
		.controller("HomeController", HomeController);
	HomeController.$inject = ["$state", "$rootScope", "NewsService", "FlashService"];
	function HomeController($state, $rootScope, NewsService, FlashService){

		var vm = this;

		vm.allNews = {};
		vm.getAllNewsFeeds = getAllNewsFeeds;
		vm.getCapitalLetter = getCapitalLetter;
		initController();

		function initController(){
			//getAllNewsFeeds();
			$(document).ready(function(){
				onLoadBoxNews();
			});
		}

		function getAllNewsFeeds(){
			var objectRequest = {};
			vm.allNews = {};
			$(".newsFeederContainer").toggleClass("loading animating");
			NewsService.NewsList().then(function (news) {
				if(!news.hasOwnProperty("error")){
						vm.allNews = news;
						setTimeout(function () {
							$(".newsFeederContainer").toggleClass("loading");
							displayLineNews();
						}, 100);
				}else{
						if(!news.hasOwnProperty("message")) FlashService.Error(news.message);
				}
      });
		}

		function getCapitalLetter(input){
			if (input.trim().length > 0) {
				var charLetterArray = input.match(/[a-zA-Z]/g);
				if(charLetterArray != null){
					return charLetterArray[0];
				}
			}
			return "";
		}
	}
})();

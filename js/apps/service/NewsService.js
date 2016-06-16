(function(){
	"use strict"

	angular
	.module("NewsFeeder")
	.factory("NewsService", NewsService);

	NewsService.$inject = ["$http"];
	function NewsService($http){

		var service = {};

		service.NewsList = newsList;

		return service;

		function newsList(){
			return $http.get("/URL/to/server/news/service").then(handleSuccess, handleError("Ocurrio un problema al obtener la información, intente de nuevo mas tarde"));
		}

		//Private for NewsService
		function handleSuccess(res) {
			return res;
		}

		function handleError(error) {
			return function () {
				return { error: true, message: error };
			};
		}
	}
})();

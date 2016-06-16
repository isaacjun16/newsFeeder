(function(){
	"use strict"

	angular
		.module("NewsFeeder")
		.filter("CapitalLetter", CapitalLetter);

	function CapitalLetter(){
    return function(input){
      if(input.length > 0){
          return input[0];
      }
      return "";
    }
	}
})();

function onLoadBoxNews(){
	var newHeight = $(window).height() * 0.9;
	$("#NewsFeederContainer").animate({
		height: newHeight
	},{
		duration: 850,
		specialEasing : {
			height: "easeOutElastic"
		},
		complete: function(){
			$(this).css("height", "90%");
		}
	});
}

function displayLineNews(){
	var delay = 0;
	var finalWidth = $(".newsFeederContainer .table-cell > ul").width();
	var listNews = $(".newsFeederContainer .table-cell > ul > li");
	$(listNews).each(function(index){
    $(this).delay(delay).animate({
			width: finalWidth
    },{
			duration: 900,
			specialEasing : {
				width: "easeOutElastic"
			},
			complete: function(){
				$(this).css("width", "100%");
				if($(listNews).length === (index + 1)){
					console.log("last one");
					$(".newsFeederContainer").toggleClass("animating");
				}
			}
		});
    delay += 100;
	});
}

$(document).ready(function(){
	$(document).on("click", ".newsFeederContainer .table-cell > ul > li > span", function(){
		$(".newsFeederContainer").toggleClass("animatingLine");
		$(this).siblings("ul").slideToggle(800, "easeOutElastic", function(){ $(".newsFeederContainer").toggleClass("animatingLine"); });
	});
});

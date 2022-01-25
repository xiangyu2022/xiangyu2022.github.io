var sideNavHoverTime = 2000;
var sideNavHoverCurrent = 0;
$(document).ready(function () {
    var intervalID;
	var nextLink;
    $("div.left-col div.sideNav ul.sidenav li a.btnToggle").click(function () {
        if ($(this).parent().find("ul").first().css("display") == "block") {
            $(this).parent().find("ul").first().stop().slideUp("fast");
            //change the icon
            $(this).removeClass("btnToggle2");
        } else {
            $(this).parent().find("ul").first().stop().slideDown("fast");
            //change the icon
            $(this).addClass("btnToggle2");
        }
    }).next("a").hover(function () {
        //mouse hovering over a link that can expand
        var expanded = $(this).prev("a").hasClass("btnToggle2");
        if (!expanded) {
            var $this = $(this);
            intervalID = setInterval(
			function () {
				if (sideNavHoverCurrent < sideNavHoverTime) {
					sideNavHoverCurrent += 100;  //the interval
				} else {
					var button = $this.prev("a");
					button.click();
					sideNavHoverCurrent = 0;
					clearInterval(intervalID);
				}
			}, 100);
        }
    }, function () { clearInterval(intervalID); sideNavHoverCurrent = 0; });
	//added clicking functionality to top level nav items because they do not have actual pages
	$("div.left-col div.sideNav ul.sidenav li a.btnToggle").next("a").click(function(){
		if ($(this).parent().find("ul").first().css("display") == "block") {
            $(this).parent().find("ul").first().stop().slideUp("fast");
            //change the arrow icon
            $(this).prev("a").removeClass("btnToggle2");
        } else {
            $(this).parent().find("ul").first().stop().slideDown("fast");
            //change the arow icon
            $(this).prev("a").addClass("btnToggle2");
        }
	});
	//set all of the table link targets to _blank if they are not already
	$(".chapterTable a").attr("target", "_blank");
	//testing grabbing the current URL and matching it with the link instead of using custom nav classes
	$("div.left-col div.sideNav ul.sidenav a").each(function(){
	
		if ($(this).attr("href") == window.location.pathname){
			console.log("if statement was met");
		   var $this = $(this);
			//add active class to everything that needs it
		   $this.parent().parent().parent().addClass("active-top");
		   $this.parent().parent().prev().prev().addClass("btnToggle2");
		   $this.parent().addClass("active-bottom");
			}else{console.log("if statement was NOT met");};
		});
});
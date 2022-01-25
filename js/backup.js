var sideNavHoverTime = 500;
var sideNavHoverCurrent = 0;
$(document).ready(function () {
    var intervalID;
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
	//set all of the table link targets to _blank if they are not already
	$(".chapterTable a").attr("target", "_blank");
});

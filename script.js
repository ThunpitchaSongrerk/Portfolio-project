	$("button").click(function() {
	    let animal = $(".answer").val();

	    $(".result").text("Great! Your favorite animal is" + " " + animal + "." + " You should try and research what are some ways you can help preserve your favorite animal today.");
	});
		
	$(".photos").hide();

	$(".gallery").dblclick(function() {
	    $(".photos").slideToggle();
	});

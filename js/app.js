$(document).ready(function(){
    $("#begin").click(function(){
		$("#start").hide();
		$("#Q1").show("slow");
        /* $("#Q1").slideDown("slow"); */
		$("body").css("background-color","lightgray");
    });
	
	$("#next1").click(function(){
		$("#Q1").hide();
		$("#Q2").show("slow");
        $("#Q2").fadeIn("slow");
		$("body").css("background-color","white");
    });
	
	$("#next2").click(function(){
		$("#Q2").hide();
		$("#Q3").show("slow");
        $("#Q3").fadeIn("slow");
		$("body").css("background-color","lightgray");
    });
	
	$("#next3").click(function(){
		$("#Q3").hide();
		$("#Q4").show("slow");
        $("#Q4").fadeIn("slow");
		$("body").css("background-color","white");
    });
	
	$("#next4").click(function(){
		$("#Q4").hide();
		$("#Q5").show("slow");
        $("#Q5").fadeIn("slow");
		$("body").css("background-color","lightgray");
    });
	
	$("#finish").click(function(){
		$("#Q5").hide();
		$("#end").show("slow");
        $("#end").fadeIn("slow");
		$("body").css("background-color","white");
    });
});
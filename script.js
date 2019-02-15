$(".one").click(function(){
    $(".onep").show();
    $(".pirate").show();
});
$(".pirate").dblclick(function(){
    $(".secondp").show();
});
$(".main-img").click(function(){
    $("body").css("background-color", "pink");
    $("h1").text("double click here for more!");
    $(".pirate").hide();
    $(".onep").hide();
    $(".secondp").hide();
});
$("h1").dblclick(function(){
    $(".wave").slideToggle();
    $(".final").show();
    $(".final").fadeIn();
    
});
$(".wave").click(function(){
    $(".main-img").hide();
    $(".one").hide();
    $("h1").hide();
    $(".final").hide();
    $(".wave").hide();
    $("h2").show();
    $(".willy").show();
    $(".end").show();
});


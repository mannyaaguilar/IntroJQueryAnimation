$(document).ready(function(){

    // $("#bubble").hide();
    // $("#bubble").show();
    //$("#bubble").fadeIn("slow");
    // $("#bubble").fadeIn(10000);
    // $("#bubble").fadeIn(5000, function(){
    //     console.log("Meow!");
    // });
    // $("#bubble").fadeIn(5000, function(){
    //     $("#bubble").fadeOut(5000);
    // });

    $("#puppy").hide();
    // $("#puppy").slideDown(5000,function(){
    //     $("#puppy").slideUp(5000);
    // });
    recursiveSlide($("#puppy"));
    recursiveSlide($("#bubble"));

    enable();
});

function enable(){
    $("#yak").on("mouseover", function(){
        $(this).toggleClass("scott-highlight");
    });
    $("#yak").on("mouseout", function(){
        $(this).toggleClass("scott-highlight");
    });
    $("#yak").on("click", function(){
        $("#bubble").toggleClass("scott-highlight");
    });
}

function recursiveSlide(element){
    element.slideToggle(2000, function(){
        recursiveSlide(element);
    });
}
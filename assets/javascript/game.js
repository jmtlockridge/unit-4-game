
var randomresult;
var lost;
var win;

randomresult = Math.floor(Math.random() * 101 ) + 19;

console.log(randomresult);

$("#result").html('Random Result: ' + randomresult);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    $(".crystals").append(crystal);

}

$(".crystal").on('click', function () {
    console.log($(this).attr('data-random'));

});
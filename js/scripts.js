//business
var count = function(input) {
var arrayOne = [];
var arrayTwo = [];
    for (var index = 1; index <= input; index += 1) {
      if (index % 15 === 0) {
        arrayOne.push("Ping-Pong")
      } else if (index % 5 === 0) {
        arrayOne.push("Pong")
      } else if (index % 3 === 0) {
        arrayOne.push("Ping")
      } else {
        arrayOne.push(index);
      }
    }

    for (index = 0; index < arrayOne.length; index ++) {
      arrayTwo.push("<p>" + arrayOne[index] + "</p>")
    }
    return arrayTwo;
};


//Front Logic

$(document).ready(function(){
  $("form#site").submit(function(event){
    var input = parseInt($("input#num").val());
    var finalResult = count(input);
    $("#results").append(finalResult);
    $("#results").append("<p>" + count($("#site").val())+"</p>");

    event.preventDefault();
  });
});

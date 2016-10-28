var counter = function(input) {
  var arrayOne = [];
  var arrayTwo = [];
    for (var index = 1; index <= input; index += 1) {
      if (index % 15 === 0) {
        arrayOne.push("Ping Pong")
      } else if (index % 5 === 0) {
        arrayOne.push("Ping")
      } else {
        arrayOne.push(index);
      }
    }
    for (index - 0; index < arrayOne.length; index ++) {
      arrayTwo.push("<li>" + arrayOne[index] + "</li>")
    }
    return arrayTwo;
}


//Frontier Airlines://

$(document).ready(function(){
  $("form#site").submit(function(event){
    var userInput = parseInt($("input#num").val());
    var finalResult = counter(input);
    $("#results ul").html(finalResult);
    event.preventDefault();
  });
});

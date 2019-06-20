$(document).ready(function() {
  $("#vowels").submit(function(event) {
    event.preventDefault();

    var str = $("input#word").val();
    var letters = str.split("");
          console.log(letters);
    letters.forEach(function(letter) {
      if ("a", "e", "i", "o", "u") {
        return 1;
      } else {
        return 0;
      }

    // var addedLetters = letters.sum();
      // var total= 0
      console.log(total);
    //   for (var currentNumber = 0; currentNumber <= letter; currentNumber += 1) {
    // total += currentNumber;
  // }
    // }

    // var result = total;
    //
    $("#answer").text(result);
  });
});

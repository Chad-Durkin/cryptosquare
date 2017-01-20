var removeSpecial = function(input) {
  var newString = input.replace(/[^a-z]/gi, "");
  return newString;
};

var arraySquareSize = function(input) {
    var stringLength = input.length;
    var size = Math.sqrt(stringLength);

    if (stringLength % size.toFixed(0) != 0) {
      size += 1;
    }

    return parseInt(size);
};

var setupArray = function(input, squareSize, fullLength) {
  var clonedStringArray = input.split("");
  var primaryArray = new Array(parseInt(squareSize));

  for(var index = 0; index < squareSize; index++)
  {
    primaryArray[index] = new Array(parseInt(squareSize));
  }

  var stringLocation = 0;

  for(var index = 0; stringLocation < fullLength; index++)
  {
    for(var jdex = 0; jdex < squareSize; jdex++)
    {
      primaryArray[jdex][index] = clonedStringArray[stringLocation];
      stringLocation++;
    }
  }

  for(var index = 0; index < squareSize; index++)
  {
    primaryArray[index] = primaryArray[index].join("");
  }

  primaryArray = primaryArray.join(" ");

  return primaryArray;
};

$(function(){

  $("#blank").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var encodedArray;

    var cleanedString = removeSpecial(input);
    var squareSize = arraySquareSize(cleanedString);
    var fullLength = cleanedString.length;
    encodedArray = setupArray(cleanedString, squareSize, fullLength);

    $("#not-encrypted").text(input);
    $("#output").text(encodedArray);
    $("#result").fadeIn();
  })
});

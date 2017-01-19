

$(function(){

  $("#blank").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();


    $("#output").text(input);
  })
});

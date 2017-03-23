$(document).ready(function() {

  $("#animalform").change(function(){
    var userAnimal = $("#animalSelection").val();
    console.log(userAnimal);
      $('.snake', '.turtle', '.capybara').hide();

    if (userAnimal === "Snake") {
      $('.snake').show();
    } else if (userAnimal === "Turtle") {
      $(".turtle").show();
    } else {
      $(".capybara").show();
    }
  });


});

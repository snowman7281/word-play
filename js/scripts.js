$(document).ready(function(){
  $("#split").submit(function(event){
    var userInputs = $("#input").val();
    var splitInput = [];

    userInputs.forEach(function(userInput){
      userInputs = userInput.split();
      splitInput.push(userInput);
    });

    if(userInput !== ""){
      $("#output").(userInput);
    }else{
      $("span").show();
    }

    event.preventDefault();

  });
});

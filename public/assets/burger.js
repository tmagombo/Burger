// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  
    $(".change-devour").on("click", function(event) {
      console.log('doIt');
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newdevourState = {
        devour: newDevour
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevourState
      }).then(
        function() {
          console.log("changed devour state to", newDevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
    
    );
    });
});
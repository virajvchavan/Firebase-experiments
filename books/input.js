var database = firebase.database().ref();

$("#submit").click(function(){
		var book_name = $("#book_name").val();
        database.push().set(book_name);
    });

database.once("value", function(snapshot) {
  snapshot.forEach(function(child) {
   	var book_name = child.val();
    $("#the_list").append("<li>" + book_name + "</li>");
  });
});
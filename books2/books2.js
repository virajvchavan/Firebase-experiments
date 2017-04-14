var dbRef = firebase.database().ref().child("books");


$("#submit").click(function(){
	var book_title = $("#book_title").val();
	var book_author = $("#book_author").val();
	var book_description = $("#book_description").val();

	//creates a child with its own auto-generated key and stores title, author and descr under it
	dbRef.push().set({title: book_title, author: book_author, description: book_description});
});

//for each child of books, gets the values of title, author and descr
dbRef.on("child_added", snap => {
	var title = snap.child("title").val();
	var author = snap.child("author").val();
	var description = snap.child("description").val();

	//get the key to uniqueely identify the book
	var key = snap.key;

	$("#the_list").append("<li><a href = 'abook.html?id="+ key +"'>"+ title +"</a><ul><li>"+ author +"</li><li>"+ description +"</li></ul>  </li>");
});

dbRef.once("value", snap => { 
	$("#test").append();

});




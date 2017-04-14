//USE PHP FOR THIS LATER. This is just temporary
//just to get the GET variales from the URL
function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}

var get_vars = getUrlVars();

var bookRef = firebase.database().ref().child("books").child(get_vars["id"]);

bookRef.once("value", snap => {
	var book_title = snap.child("title").val();
	var book_author = snap.child("author").val();
	var book_description = snap.child("description").val();
	$("#book_title").append(book_title);
	$("#book_description").append(book_description);
	$("#book_author").append(book_author);
});
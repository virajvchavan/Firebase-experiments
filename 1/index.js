var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireheading");

//creates a reference to the root's child called "Heading" of the database
var firebaseHeadingRef = firebase.database().ref().child("Heading");

//each time the value for Heading is changes, it is given to the 'fireheading' i.e. the <h1> tag in html
//this happens in realtime
firebaseHeadingRef.on('value', function(datasnapshot){
	fireHeading.innerText = datasnapshot.val();
});


//called when the button is clicked
function submitClick()
{
	//creates a reference to the root of the database
	var firebaseRef = firebase.database().ref();

	//take the text value from the text field
	var messageText = mainText.value;

	//push the text in the textfield(messageText) to the database(Will go under the root as the ref is the root)
	firebaseRef.push().set(messageText);
}
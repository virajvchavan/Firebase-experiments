const txtEmail = $("#inputEmail");
const txtPassword = $("#inputPassword");
const btnLogin = $("#login_button");
const btnLogout = $("#logout_button");

btnLogin.click(function(){
  const email = txtEmail.val();
  const pass = txtPassword.val();
  const auth = firebase.auth();

  // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

//add a realtime login listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    $("#login_status").show();
  }else{
    console.log("Not logged in.");
    $("#login_status").hide();
  }
});

btnLogout.click(function(){
  firebase.auth().signOut();
})
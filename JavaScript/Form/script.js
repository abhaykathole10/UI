var user_name = document.aForm.user_name
var user_pass = document.aForm.user_pass

var userName = 'abhaykathole10'
var userPass = 'abhay@123'

function aFunc() {
  if (user_name.value == userName && user_pass.value == userPass) {
    alert('Login Successully')
  } else alert('Invalid Credentials')
}

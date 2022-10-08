function aFunc() {
  var user_name = document.aForm.user_name.value
  var user_pass = document.aForm.user_pass.value
  var errMsg = document.getElementById('errMsg').value

  var userName = 'abhaykathole10'
  var userPass = 'abhay@123'

  if (user_name == '' && user_pass == '') {
    alert('Please enter Credentials')
  } else if (user_name == '') {
    alert('Please enter username')
  } else if (user_pass == '') {
    alert('Please enter password')
  } else if (user_name == userName && user_pass == userPass) {
    alert('Login Successully')
  } else alert('Invalid Credentials')
}

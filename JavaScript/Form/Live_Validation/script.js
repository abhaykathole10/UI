function myFunc() {
  var user_name = document.aForm.user_name
  var err_msg = document.getElementById('err_msg')
  if (user_name.value.length < 3) {
    err_msg.innerHTML = 'Too small'
    err_msg.style.color = 'red'
    user_name.style.backgroundColor = 'aqua'
  } else if (user_name.value.length === 5) {
    err_msg.innerHTML = 'Perfect'
    err_msg.style.color = 'green'
  } else if (user_name.value.length > 7) {
    err_msg.innerHTML = 'Too long'
    err_msg.style.color = 'orange'
  }
}

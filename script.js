function viewPassword() {
  var x = document.getElementById('pswd_input');
  let eyeOpen = document.getElementById('pswd_eye_open');
  let eyeClosed = document.getElementById('pswd_eye_closed');
  if (x.type === 'password') {
    x.type = 'text';
    eyeOpen.style.display = 'block';
    eyeClosed.style.display = 'none';
  } else {
    x.type = 'password';
    eyeClosed.style.display = 'block';
    eyeOpen.style.display = 'none';
  }
}

function viewPasswordAlt() {
  var x = document.getElementById('pswd_input_alt');
  let eyeOpen = document.getElementById('pswd_eye_open_alt');
  let eyeClosed = document.getElementById('pswd_eye_closed_alt');
  if (x.type === 'password') {
    x.type = 'text';
    eyeOpen.style.display = 'block';
    eyeClosed.style.display = 'none';
  } else {
    x.type = 'password';
    eyeClosed.style.display = 'block';
    eyeOpen.style.display = 'none';
  }
}

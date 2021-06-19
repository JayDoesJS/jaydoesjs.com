// Source: https://github.com/rjkrd/rot13/ - MIT License
function rot13(str) {
  const input  = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const output = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  let result = "";

  for (pos in str) {
    if (input.indexOf(str[pos]) !== -1) {
      result += output[input.indexOf(str[pos])];
    } else {
      result += str[pos];
    }
  }

  return result;
}

// Have to do this thing to avoid email grabbers that scan GitHub repositories
const businessEmail = document.getElementById('email-placeholder');
const encodedEmail = 'wnlqbrfwf';
businessEmail.textContent = `${rot13(encodedEmail)}@gmail.com`;

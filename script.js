const hamb = document.querySelector('.hamb');
const navLinks = document.querySelector('.nav-links');

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.navlink').forEach((n) => n
  .addEventListener('click', () => {
    hamb.classList.remove('active');
    navLinks.classList.remove('active');
  }));

  // contact form
const formula = document.querySelector('.formClass');
function errData(data) {
  document.getElementById('error').innerHTML = data;
}
const email = document.getElementById('contact-email');
formula.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    errData('Please input email in lower case');
    e.preventDefault();
    return false;
  }
  return true;
});

// ==========================
// PART 1: EVENT HANDLING
// ==========================

//Light/Dark Mode Toggle
// Purpose: Listen for a click event and toggle the "dark-mode" class on the body.
// This dynamically switches the website theme between light and dark.
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change button text depending on theme
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Switch to Light Mode';
  } else {
    themeToggleBtn.textContent = 'Switch to Dark Mode';
  }
});


// ==========================
// PART 2: INTERACTIVE ELEMENTS
// ==========================

// Counter Feature
// Purpose: Demonstrate DOM updates in real-time based on button clicks.
let count = 0;
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');

// Increment counter
increaseBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

// Reset counter
resetBtn.addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = count;
});

// FAQ Section
// Purpose: Toggle visibility of answers when the question is clicked.
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});


// ==========================
// PART 3: FORM VALIDATION
// ==========================

// Purpose: Validate user input for Name, Email, and Password fields.
// - Prevents form submission if fields are invalid.
// - Displays helpful error messages under each field.

const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission (no reload)

  // Clear previous messages
  document.getElementById('form-success').textContent = '';
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';

  // Collect input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validation flags
  let isValid = true;

  // Validate Name
  if (name.length < 3) {
    document.getElementById('name-error').textContent = 'Name must be at least 3 characters long.';
    isValid = false;
  }

  // Validate Email using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate Password (min 6 chars + at least one number)
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById('password-error').textContent =
      'Password must be at least 6 characters long and contain at least one number.';
    isValid = false;
  }

  // If all checks pass, show success message
  if (isValid) {
    document.getElementById('form-success').textContent = '🎉 Form submitted successfully!';
    form.reset(); // Clear the form
  }
});

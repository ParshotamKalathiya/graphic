document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const subjectInput = document.getElementById('subject').value;
    const messageInput = document.getElementById('message').value;

    // Check for empty fields
    if (!nameInput) {
        alert('Please enter your name');
    } else if (!emailInput) {
        alert('Please enter your email');
    } else if (!validateEmail(emailInput)) {
        alert('Please enter a valid email address');
    }else if(!subjectInput){
        alert('Please enter your subject')
    }else if(!messageInput){
        alert('Please enter your message')
    } else {
        // Proceed with form submission or further processing
        alert(`Thank You ${nameInput} for Contact me.`);
    }
});

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

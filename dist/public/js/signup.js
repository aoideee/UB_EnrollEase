document.addEventListener('DOMContentLoaded', function() {
    const accountTypeSelect = document.getElementById('accountType');
    const studentFields = document.getElementById('studentFields');
    const teacherFields = document.getElementById('teacherFields');
    const signupForm = document.getElementById('signupForm');

    // Show/hide fields based on account type selection
    accountTypeSelect.addEventListener('change', function() {
        studentFields.style.display = 'none';
        teacherFields.style.display = 'none';
        
        if (this.value === 'student') {
            studentFields.style.display = 'block';
            document.getElementById('major').required = true;
        } else if (this.value === 'teacher') {
            teacherFields.style.display = 'block';
            document.getElementById('department').required = true;
        }
    });

    // Password validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    function validatePassword() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords don't match");
        } else {
            confirmPassword.setCustomValidity('');
        }
    }

    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validatePassword);

    // Form submission handler
    signupForm.addEventListener('submit', function(e) {
        // Additional validation can be added here if needed
        // All required field validation is handled by HTML5 validation
    });
});
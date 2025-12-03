const fullNameInput = document.getElementById('fullName');
const jobTitleInput = document.getElementById('jobTitle');
const namePreview = document.getElementById('name');
const jobTitlePreview = document.getElementById('jobTitlePreview');
const copySignatureButton = document.getElementById('copySignatureButton');
const signaturePreview = document.querySelector('.signature-preview'); // Added reference to the preview container
const notificationTimeout = 2000; // 2 seconds

let errorTimeoutId = null;

// Initialize the signature display on load (optional but good practice)
updateSignature(); 

fullNameInput.addEventListener('input', validateAndUpdateSignature);
jobTitleInput.addEventListener('input', validateAndUpdateSignature);
copySignatureButton.addEventListener('click', handleCopySignature);

function validateAndUpdateSignature() {
    // Note: Updated validation to allow basic job title characters like hyphens, periods, and commas.
    // If you need to allow more symbols, adjust the regex here:
    const isNameValid = validateInput(fullNameInput);
    const isTitleValid = validateInput(jobTitleInput);

    if (isNameValid && isTitleValid) {
        updateSignature();
        // Clear error notification if it was showing and input becomes valid
        const activeError = document.querySelector('.notification.error');
        if (activeError) {
            clearTimeout(errorTimeoutId);
            activeError.remove();
        }
    } else {
        // Only show error if a field is actively being typed into and is invalid
        if (fullNameInput.value.length > 0 && !isNameValid || jobTitleInput.value.length > 0 && !isTitleValid) {
             showError('Only letters, spaces, hyphens, periods, and commas allowed.');
        } else {
            updateSignature(); // Keep preview updated even if validation fails on one field
        }
    }
}

function validateInput(input) {
    const value = input.value;
    // Updated regex to allow letters, spaces, hyphens, periods, and commas.
    // This makes the job title input more realistic.
    return /^[a-zA-Z\s\-\.\,]*$/.test(value);
}

function updateSignature() {
    namePreview.textContent = fullNameInput.value.trim();
    jobTitlePreview.textContent = jobTitleInput.value.trim();
}

function handleCopySignature() {
    if (validateInput(fullNameInput) && validateInput(jobTitleInput)) {
        copySignature();
        showNotification('Signature copied to clipboard', false);
    } else {
        showError('Please fix the input errors before copying.');
    }
}

/**
 * The core function change: Copies HTML content to the clipboard for rich text pasting.
 */
function copySignature() {
    // Get the full HTML content of the signature preview
    const signatureHTML = signaturePreview.innerHTML;
    const signatureText = signaturePreview.innerText;

    // Use the modern Clipboard API to write both 'text/html' and 'text/plain'
    navigator.clipboard.write([
        new ClipboardItem({
            'text/html': new Blob([signatureHTML], { type: 'text/html' }),
            'text/plain': new Blob([signatureText], { type: 'text/plain' })
        })
    ])
    .then(() => {
        console.log('HTML and Text copied to clipboard');
    })
    .catch(err => {
        console.error('Failed to copy complex data: ', err);
        // Fallback for browsers that don't support the Clipboard API
        fallbackCopyTextToClipboard(signatureHTML, signatureText);
    });
}

// Fallback function for older browsers (uses document.execCommand which is deprecated but useful)
function fallbackCopyTextToClipboard(html, text) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);
    
    const range = document.createRange();
    range.selectNodeContents(tempDiv);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        const successful = document.execCommand('copy');
        if (!successful) {
            alert('Fallback copy failed. Please copy the text manually:\n\n' + text);
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        alert('Fallback copy failed. Please copy the text manually:\n\n' + text);
    }
    
    selection.removeAllRanges();
    tempDiv.remove();
}

function showError(message) {
    showNotification(message, true);
}

function showNotification(message, isError = false) {
    clearTimeout(errorTimeoutId);
    
    // Remove existing notification to prevent stacking
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.classList.add('notification');
    if (isError) {
        notification.classList.add('error');
    }
    notification.textContent = message;
    document.body.appendChild(notification);

    // Use CSS animation to handle the fade-out, but still remove element
    errorTimeoutId = setTimeout(() => {
        notification.remove();
    }, notificationTimeout + 500); // 500ms buffer for animation to complete
}
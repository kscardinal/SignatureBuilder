const fullNameInput = document.getElementById('fullName');
const jobTitleInput = document.getElementById('jobTitle');
const namePreview = document.getElementById('name');
const jobTitlePreview = document.getElementById('jobTitlePreview');
const copySignatureButton = document.getElementById('copySignatureButton');
const notificationTimeout = 2000; // 2 seconds

let errorTimeoutId = null;

fullNameInput.addEventListener('input', validateAndUpdateSignature);
jobTitleInput.addEventListener('input', validateAndUpdateSignature);
copySignatureButton.addEventListener('click', handleCopySignature);

function validateAndUpdateSignature() {
    const isNameValid = validateInput(fullNameInput);
    const isTitleValid = validateInput(jobTitleInput);

    if (isNameValid && isTitleValid) {
        updateSignature();
    } else {
        showError('Only whitespace and letters allowed');
    }
}

function validateInput(input) {
    const value = input.value;
    return /^[a-zA-Z\s]*$/.test(value);
}

function updateSignature() {
    namePreview.textContent = fullNameInput.value;
    jobTitlePreview.textContent = jobTitleInput.value;
}

function handleCopySignature() {
    if (validateInput(fullNameInput) && validateInput(jobTitleInput)) {
        copySignature();
        showNotification('Signature copied to clipboard', false);
    } else {
        showError('Only whitespace and letters allowed');
    }
}

function copySignature() {
    const signatureContent = document.querySelector('.signature-preview').innerText;
    navigator.clipboard.writeText(signatureContent)
        .then(() => {
            console.log('Copied to clipboard:', signatureContent);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function showError(message) {
    showNotification(message, true);
}

function showNotification(message, isError = false) {
    clearTimeout(errorTimeoutId);
    
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

    errorTimeoutId = setTimeout(() => {
        notification.remove();
    }, notificationTimeout);
}
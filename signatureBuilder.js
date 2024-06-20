const fullNameInput = document.getElementById('fullName');
const jobTitleInput = document.getElementById('jobTitle');
const namePreview = document.getElementById('name');
const jobTitlePreview = document.getElementById('jobTitlePreview');
const copySignatureButton = document.getElementById('copySignatureButton');

const notificationTimeout = 2000; // 2 seconds

fullNameInput.addEventListener('input', updateSignature);
jobTitleInput.addEventListener('input', updateSignature);

copySignatureButton.addEventListener('click', function() {

    copySignature();
    showNotification();

});

function updateSignature() {
    namePreview.textContent = fullNameInput.value;
    jobTitlePreview.textContent = jobTitleInput.value;
}

function copySignature() {
    const signatureContent = document.querySelector('.signature-preview').innerText;

    navigator.clipboard.writeText(signatureContent)
        .then(() => {
            console.log('Copied to clipboard:', text);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

// Function to show notification
function showNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'Signature copied to clipboard';
    document.body.appendChild(notification);

    // Remove notification after a timeout
    setTimeout(() => {
        notification.remove();
    }, notificationTimeout);
}
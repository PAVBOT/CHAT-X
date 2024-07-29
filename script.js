document.getElementById('newMeeting').addEventListener('click', createNewMeeting);
document.getElementById('joinMeeting').addEventListener('click', joinMeeting);

let meetingCode = '';
let meetingPassword = '';

function createNewMeeting() {
    meetingCode = generateRandomCode();
    document.getElementById('codeContainer').innerText = `Meeting Code: ${meetingCode}`;
    document.getElementById('newPassword').style.display = 'block';
    document.getElementById('newMeeting').disabled = true;

    // Save the password
    document.getElementById('newPassword').addEventListener('change', function() {
        meetingPassword = this.value;
        alert('New meeting created. Share this code and password: ' + meetingCode + ' ' + meetingPassword);
    });
}

function joinMeeting() {
    const enteredCode = document.getElementById('joinCode').value;
    const enteredPassword = document.getElementById('joinPassword').value;
    
    if (enteredCode === meetingCode && enteredPassword === meetingPassword) {
        document.getElementById('chatRoom').style.display = 'block';
        document.getElementById('chatRoom').innerText = 'Welcome to the chat room!';
    } else {
        alert('Invalid code or password. Please try again.');
    }
}

function generateRandomCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

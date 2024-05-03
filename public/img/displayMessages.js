// Add event listener for compose button
const composeButton = document.getElementById('compose-button');
composeButton.addEventListener('click', toggleComposeForm);

function toggleComposeForm() {
    const composeForm = document.getElementById('compose-form');
    composeForm.style.display = composeForm.style.display === 'none' ? 'block' : 'none';
}

// Add event listener for message form submission
const messageForm = document.getElementById('message-form');
messageForm.addEventListener('submit', sendMessage);

function sendMessage(event) {
    event.preventDefault();
    const subjectInput = document.getElementById('subject');
    const textInput = document.getElementById('text');
    const subject = subjectInput.value;
    const text = textInput.value;
    // Create new message object
    const newMessage = {
        subject: subject,
        text: text
    };
    // Send the new message to the server
    fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
    })
    .then(response => {
        if (response.ok) {
            // If the message was successfully sent, clear the form
            subjectInput.value = '';
            textInput.value = '';
            // Display a success message or update the message list
            // For simplicity, you can reload the entire message list
            displayMessages();
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => console.error('Error sending message:', error));
}

function displayMessages() {
    fetch('/api/messages')
        .then(response => response.json())
        .then(messages => {
            const messageList = document.getElementById('message-list');
            messageList.innerHTML = ''; // Clear existing messages
            messages.forEach(message => {
                const listItem = document.createElement('li');
                listItem.classList.add('message-item');
                listItem.innerHTML = `
                    <div><strong>From:</strong> ${message.from}</div>
                    <div><strong>subject:</strong> ${message.subject}</div>
                `;
                listItem.addEventListener('click', () => {
                    displayMessageDetails(message);
                });
                messageList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching messages:', error));
}

function displayMessageDetails(message) {
    const messageFrom = document.getElementById('message-from');
    const messageSubject = document.getElementById('message-subject');
    const messageText = document.getElementById('message-text');
    const composeForm = document.getElementById('compose-form'); // Get compose form
    composeForm.style.display = 'none'; // Hide compose form
    messageFrom.textContent = message.from;
    messageSubject.textContent = message.subject;
    messageText.textContent = message.text;
}

// Call the displayMessages function to fetch and display messages
displayMessages();

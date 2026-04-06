

document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.send-btn');
    
    sendButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        
        const nameInput = document.querySelector('.name input[type="text"]');
        const emailInput = document.querySelector('.email input[type="text"]');
        const subjectInput = document.querySelector('.subject input[type="text"]');
        const messageInput = document.querySelector('.message textarea');
        
        const messageData = {
            name: nameInput.value || 'Not provided',
            email: emailInput.value || 'Not provided',
            subject: subjectInput.value || 'No subject',
            message: messageInput.value || 'No message',
            timestamp: new Date().toLocaleString('en-IN')
        };
        
        // Store in localStorage
        let allMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        allMessages.unshift(messageData); // New message top pe
        localStorage.setItem('contactMessages', JSON.stringify(allMessages));
        
        // Success feedback
        alert(' Message stored successfully!\n\n' + 
              'Name: ' + messageData.name + '\n' +
              'Email: ' + messageData.email + '\n' +
              'Subject: ' + messageData.subject + '\n' +
              'Time: ' + messageData.timestamp);
        
        // Clear form
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
        
        console.log(' New Message Stored:', messageData);
        console.log(' All Messages:', JSON.parse(localStorage.getItem('contactMessages')));
    });
});

console.table(JSON.parse(localStorage.getItem('contactMessages')));


localStorage.removeItem('contactMessages');
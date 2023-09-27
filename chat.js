document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value.trim();

        if (userMessage !== '') {
            addMessage('You', userMessage);

            // Replace this with your AI chatbot logic
            const botResponse = getBotResponse(userMessage);

            setTimeout(() => {
                addMessage('Chatbot', botResponse);
            }, 500);

            userInput.value = '';
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);

        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Replace this with your AI chatbot's response logic
        // You can use conditional statements or call an external API for responses
        return 'Hello! This is your chatbot responding.';
    }
});

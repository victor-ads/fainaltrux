document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");

    sendBtn.addEventListener("click", function() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            appendMessage(userMessage, "user");
            userInput.value = "";
            setTimeout(() => {
                botResponse(userMessage);
            }, 1000);
        }
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });

    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function botResponse(userMessage) {
        const botMessage = `You said: ${userMessage}`;
        appendMessage(botMessage, "bot");
    }
});

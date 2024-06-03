const clientId = 'cliente_' + Math.random().toString(36).substr(2, 9);
const ws = new WebSocket(`ws://localhost:8000/ws/${clientId}`);

ws.onmessage = function(event) {
    const messages = document.getElementById('messages');
    const message = JSON.parse(event.data);
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${message.client_id}: ${message.message}`;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;  // Scroll para a última mensagem
};

function sendMessage() {
    const input = document.getElementById("message");
    if (input.value.trim() !== "") {
        ws.send(input.value);
        input.value = '';
    }
}

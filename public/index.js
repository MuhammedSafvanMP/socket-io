var socket = io();
var form = document.getElementById('chat-form');
var input = document.getElementById('chat-input');
var messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value){
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    var item = document.createElement('li');
    item.className = "clearfix";
    item.innerHTML = `
        <div class="message-data text-right">
            <span class="message-data-time">${new Date().toLocaleString()}</span>
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
        </div>
        <div class="message other-message float-right">${msg}</div>`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
const socket = io('http://localhost:8000');
const form = document.querySelector('#send-container');
const messageInput = document.querySelector('#messageInp')
const messageCont = document.querySelector('.container');
const audio = new Audio("sound.mp3");
const append = (message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add("message")
    messageElement.classList.add(position)
    messageCont.append(messageElement);
if (position=='left') {
    audio.play();

};
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`you: ${message}`,'right');
    socket.emit('send',message);
    messageInput.value=" "
});

const nam = prompt("enter your name to join the chat");
socket.emit('new-user-joined',nam);
socket.on('user-joined',nam=>{
        append(`${nam} entered in the chat`,'right')
})

socket.on('receive',data=>{
    append(`${data.nam}:${data.message}`,'left')
})
socket.on('leave',nam=>{
    append(`${data.nam}left the chat`,'right')
})

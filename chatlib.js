$("body").append('<div class="loadingModal"><img class="loadingAnimation" src="/image/blaxLogo.png"/></div>');
document.getElementById("#headerText").addEventListener("click", function() {
    window.location.href = "/";
});
document.getElementById("#logoutButton").addEventListener("click", function() {
    window.location.href = "/logout/";
});
document.getElementById("#settingsButton").addEventListener("click", function() {
    window.location.href = "/settings/";
});
document.getElementById("#elementsButton").addEventListener("click", function() {
    window.location.href = "/elements/";
});
document.getElementById("#cratesButton").addEventListener("click", function() {
    window.location.href = "/crates/";
});
document.getElementById("#leaderboardButton").addEventListener("click", function() {
    window.location.href = "/leaderboard/";
});
document.getElementById("#statsButton").addEventListener("click", function() {
    window.location.href = "/stats/";
});
document.getElementById("#inputField").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
$(document).ready(function() {
    $.get('/api/lcheck', function(data) {
        if (data === 'LOGGED OUT') {
            window.location = '/login/';
        }
    });
    $.get('/api/user', function(data) {
        userData = JSON.parse(data);
        userName = userData.name.toLowerCase();
    });
    $.get('/api/elements', function(data) {
        elementList = JSON.parse(data);
        socket.on('rmes', (messageJson)=>{
            var chatBox = document.querySelector('.chatBox');
            chatBox.maxScrollTop = chatBox.scrollHeight - chatBox.offsetHeight
            var messageId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
            var messageUserId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
            var messageTextId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
            if (messageJson.element == null) {
                var element = '/image/elements/blax.png';
            } else {
                if (typeof elementList[messageJson.element] === 'undefined') {
                    var imageSplit = messageJson.element.split('|');
                    var element = imageSplit[1];
                } else {
                    var element = elementList[messageJson.element]["imageURL"];
                }
            }
            if (messageJson.color === 'rainbow') {
                $(".chatBox").append(`<text id="${messageId}" class="chatMessage"><img src="${element}" width="18px" style="margin-right: 0.2%;"><text id="${messageUserId}" style="animation: rainbowText 5s infinite forwards;"></text><text id="${messageTextId}"></text></text>`);
            } else {
                $(".chatBox").append(`<text id="${messageId}" class="chatMessage"><img src="${element}" width="18px" style="margin-right: 0.2%;"><text id="${messageUserId}" style="color: ${messageJson.color}; text-shadow: 0px 0px 25px ${messageJson.color}"></text><text id="${messageTextId}"></text></text>`);
            }
            if (messageJson.message.toLowerCase().includes(`@${userName}`)) {
                document.getElementById(messageId).style.background = "#2a2e00"
                document.getElementById(messageId).style.filter = "drop-shadow(0px 0px 15px #2a2e00)"
                var sound = new Audio('/audio/mention.mp3');
                sound.play();
            }
            if (messageJson.message.toLowerCase().includes("@everyone")) {
                document.getElementById(messageId).style.background = "#2a2e00"
                document.getElementById(messageId).style.filter = "drop-shadow(0px 0px 15px #2a2e00)"
                var sound = new Audio('/audio/mention.mp3');
                sound.play();
            }
            document.getElementById(messageUserId).textContent = `[${messageJson.role}] ${messageJson.user} > `;
            if (messageJson.user === 'Xotic') {
                document.getElementById(messageTextId).innerHTML = messageJson.message;
            } else {
                document.getElementById(messageTextId).textContent = messageJson.message;
            }
            if (chatBox.maxScrollTop - chatBox.scrollTop <= chatBox.offsetHeight) {
                $(".chatBox").animate({
                    scrollTop: chatBox.scrollHeight
                }, 'normal');
            } else {}
        }
        );
        socket.on('clear', function() {
            document.querySelector(".chatBox").innerHTML = "";
        });
        $(".loadingModal").remove();
    });
});

function sendMessage() {
    var message = document.getElementById("#inputField").value;
    if (message === '') {
        return;
    }
    socket.emit('smes', message);
    document.getElementById("#inputField").value = "";
}

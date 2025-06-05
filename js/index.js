function check() {
    var d = new Date();
    var event = new Date(2024, 6, 10, 6, 30, 0, 0);
    var diff = d-event;
    document.getElementById("countdown-day").innerHTML = Math.floor(diff/86400000) + "天";
    document.getElementById("countdown-hour").innerHTML = Math.floor((diff%86400000)/3600000) + "小时";
    document.getElementById("countdown-minute").innerHTML = Math.floor(((diff % 86400000) % 3600000) / 60000)+1 + "分钟";
}

setInterval(check, 1000);

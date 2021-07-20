getCookie('Presence') === '1' ? null : setTimeout(inistachi_auto_show, 11000);
function inistachi_clop() {
    if (document.querySelector('.chi-insta').classList.contains('taymaz_show')) {
        document.querySelector('.chi-insta').classList.remove("taymaz_show");
        document.querySelector('.chi-insta').classList.add("taymaz_hide");
        document.querySelector('.ins-chi').style.display = 'block';
    } else {
        document.querySelector('.chi-insta').classList.remove("taymaz_hide");
        document.querySelector('.chi-insta').classList.add("taymaz_show");
        document.querySelector('.ins-chi').style.display = 'none';
    }
}
function play() {
    var audio = new Audio("../audio/inistachi.mp3");
    audio.play();
}
function inistachi_auto_show() {
    if (document.querySelector('.chi-insta').style.display === 'block') {
        //nothing
    } else {
        play();
        inistachi_clop();
    }
    setCookie('Presence', 1, 3);
}
//funcs
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
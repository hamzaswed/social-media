var add = document.getElementsByClassName("add")[0],
    insta =  document.getElementsByClassName("insta")[0],
    face =  document.getElementsByClassName("face")[0],
    twit = document.getElementsByClassName("twit")[0],
    whats =  document.getElementsByClassName("whats")[0],
    h1 = document.getElementsByTagName('h1')[0];
h1.onclick = function(){
    if(twit.classList.contains("twit0") == false){
        add.style.backgroundColor = "transparent";
        h1.classList.add("h10");
        h1.style.fontSize = "125px";
        twit.classList.add("twit0")
        insta.classList.add("insta0");
        face.classList.add("face0");
        whats.classList.add("whats0");
        }else{
        add.style.backgroundColor = "#243080";
        h1.classList.remove("h10");
        h1.style.fontSize = "50px";
        twit.classList.remove("twit0");
        insta.classList.remove("insta0");
        face.classList.remove("face0");
        whats.classList.remove("whats0");
}
}
twit.onclick = function(){
    window.location.href= "https://twitter.com/SwedHamza"
}
whats.onclick = function(){
    window.location.href= "whatsapp://send?abid=5376177791&text=Hello%2C%20World!"
}
face.onclick = function(){
    window.location.href= "https://www.facebook.com/profile.php?id=100006249256945"
}
insta.onclick = function(){
    window.location.href= "https://www.instagram.com/hamzaasw/"
}
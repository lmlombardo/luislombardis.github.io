var scrollButton = document.getElementById("scrollButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("scrollButton").style.display = "block";
    }
    else{
        document.getElementById("scrollButton").style.display = "none";
    }   
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function redirection(url){
  var win = window.open(url,);
  win.focus();
}



document.addEventListener("DOMContentLoaded", function(){
    console.log("hohosof");
    dameEstrellas();
});

function dameEstrellas(){
loadJSON('https://api.github.com/repos/luislombardis/luislombardis.github.io',
         function(data) { console.log(data); },
         function(xhr) { console.error(xhr); }
   );
}


function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    var myParsed = JSON.parse(xhr.responseText);
                     document.getElementById("dameEstrellas").innerHTML = "Mis estrellas son "+myParsed.stargazers_count;
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

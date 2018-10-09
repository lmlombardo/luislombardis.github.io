      $(document).ready(function(){
  
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
  
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
  
    });



document.addEventListener("DOMContentLoaded", function(){
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

/*document.addEventListener("DOMContentLoaded", function(){
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
                     document.getElementById("dameEstrellas").innerHTML = "Las estrellas que tengo en mi repositorio de github son "+myParsed.stargazers_count;
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}*/
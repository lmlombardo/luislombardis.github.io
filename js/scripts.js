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
/*
              <a href="https://coredumped.es"><i class="small material-icons offset-s1">home</i></a>*/
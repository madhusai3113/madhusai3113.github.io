

//for close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//for adding new element(text div)

function newElement() {
	var liDiv = document.createElement("li");
	var inputValue = document.getElementById("inputbox").value;
	lStorage(inputValue);
	var t = document.createTextNode(inputValue);
	liDiv.appendChild(t);
	document.getElementById("row").appendChild(liDiv);
	document.getElementById("inputbox").value = "";

	var span = document.createElement("BUTTON");
	var txt = document.createTextNode("X");
	span.className = "close";
	span.appendChild(txt);
	liDiv.appendChild(span);

	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


function lStorage(workText) {
	localStorage.setItem('work_Text', workText);
}
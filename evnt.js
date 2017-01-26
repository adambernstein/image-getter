var v;
document.getElementsByTagName("body")[0].onclick = getMouse;


function getMouse(event) { 
    var source = event.target.previousElementSibling.children[0].src;
	if (source != "null")&&(source!="undefined"){
		browser.runtime.sendMessage({sourceURL: source});
	}
}

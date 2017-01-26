var v;
document.getElementsByTagName("body")[0].onclick = getMouse;


function getMouse(event) { 
    var source = event.target.previousElementSibling.children[0].src;
if (source){
		var sending = browser.runtime.sendMessage({sourceURL: source});
		sending.then(onSend, onError)
	}
	else console.log("src is null");
}

function onSend(message) {
	console.log(`Message sent:  ${message}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
//Create the menu item, but only on instagram.com
chrome.contextMenus.create({
  id: "imget",
  title: "IMGet!",
  contexts: ["all"], 
  documentUrlPatterns: ["*://*.instagram.com/*"]
});

//Add listener for menu item click. 'info' about the click target included 
browser.contextMenus.onClicked.addListener((info, tab) => {
	//if the click target has no srcUrl, give an alert
	if (info.linkUrl == "") {
		console.log(`Error: linkUrl is blank`);	
		
		var sendAlert = 'alert("No image selected")';
		
		//using the new js "Promise"
		var executing = browser.tabs.executeScript({
			code: sendAlert
		});
		executing.then(onExecuted, onError);
	}
	
	//else create a new tab with the location of the srcUrl
	else {
		var creating = browser.tabs.create({
			url:info.linkUrl
		}); 
		creating.then(onCreated, onError);
	}
});

function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function onExecuted(result){
	console.log(`Alert sent to current tab ${result}`);
}
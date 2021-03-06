//Create the menu item, but only on instagram.com
browser.contextMenus.create({
  id: "imget",
  title: "IMGet!",
  contexts: ["all"], 
  documentUrlPatterns: ["*://*.instagram.com/*"]
});

var g_srcUrl;
//handle any incoming messages about clicks
browser.runtime.onMessage.addListener(handleMessage);	

//Add listener for menu item click. 'info' about the click target included 
browser.contextMenus.onClicked.addListener((info, tab) => {
	
	
	if (g_srcUrl=="undefined") {
		console.log(`Error: srcUrl is blank`);	
		
		var sendAlert = "alert('No image selected')";
		
		//using the new js "Promise"
		var executing = browser.tabs.executeScript({
			code: sendAlert
		});
		executing.then(onExecuted, onError);
	}
	
	//else create a new tab with the location of the srcUrl
	else {
		var creating = browser.tabs.create({
			url: g_srcUrl
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

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " + request.sourceURL);
  g_srcUrl = request.sourceURL;
  
}


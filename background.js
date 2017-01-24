chrome.contextMenus.create({
  id: "clickme",
  title: "Click me!",
  contexts: ["all"], 
  documentUrlPatterns: ["http://example.org/*"]
});


browser.contextMenus.onClicked.addListener((info, tab) => {
	
	if (info.linkUrl == "") console.log(`Error: linkUrl is blank`);	
	
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
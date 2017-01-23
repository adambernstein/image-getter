chrome.contextMenus.create({
  id: "clickme",
  title: "Click me!",
  contexts: ["all"], 
  documentUrlPatterns: ["http://example.org/*"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log(info.linkURL);
});

function pickAndOpen(url){
	console.log("URL: "+url);
}
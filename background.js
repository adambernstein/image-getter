chrome.contextMenus.create({
  id: "clickme",
  title: "Click me!",
  contexts: ["all"], 
  documentUrlPatterns: ["http://example.org/*"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log("Item " + info.menuItemId + " clicked " + "in tab " + tab.id);
  console.log(`Error: ${browser.runtime.lastError}`);
});
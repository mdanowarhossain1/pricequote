
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://example.com/quoteflow" });
});

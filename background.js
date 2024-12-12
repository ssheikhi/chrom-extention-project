chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ loggedIn: false }); // Default to logged out
});

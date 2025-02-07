chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ bookmarks: [] });
    console.log("YouTube Bookmark Manager Installed");
});

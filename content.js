function addBookmarkButton() {
    if (document.getElementById("yt-bookmark-btn")) return;

    const controlBar = document.querySelector(".ytp-right-controls");
    if (!controlBar) {
        setTimeout(addBookmarkButton, 1000);
        return;
    }

    const btn = document.createElement("button");
    btn.innerHTML = "📌";
    btn.id = "yt-bookmark-btn";
    btn.style.position = "absolute";
    btn.style.bottom = "10px";  // Adjust height to match the caption icon
    btn.style.left = "500px";
    btn.style.background = "#28a745";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "50%";
    btn.style.width = "35px";
    btn.style.height = "35px";
    btn.style.fontSize = "18px";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "1000";
    btn.title = "Save Bookmark";

    btn.addEventListener("click", () => {
        const video = document.querySelector("video");
        if (video) {
            const timestamp = Math.floor(video.currentTime);
            const videoId = new URL(window.location.href).searchParams.get("v");
            const videoTitle = document.title.replace(" - YouTube", "");

            const note = prompt(`📌 Bookmark Note for ${timestamp}s:`);
            if (note === null) return;

            chrome.storage.sync.get(["bookmarks"], (data) => {
                const bookmarks = data.bookmarks || [];
                bookmarks.push({ videoId, timestamp, note, videoTitle });

                chrome.storage.sync.set({ bookmarks }, () => {
                    alert(`✅ Saved: ${videoTitle} at ${timestamp}s\nNote: "${note}"`);
                });
            });
        }
    });

    controlBar.prepend(btn);
}

addBookmarkButton();

let observer = new MutationObserver(addBookmarkButton);

observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener("DOMContentLoaded", () => {
    const bookmarksList = document.getElementById("bookmarks-list");

    function loadBookmarks() {
        chrome.storage.sync.get(["bookmarks"], (data) => {
            const bookmarks = data.bookmarks || [];
            bookmarksList.innerHTML = ""; // Clear before rendering

            bookmarks.forEach((bookmark, index) => {
                const div = document.createElement("div");
                div.classList.add("bookmark");
                div.innerHTML = `
                    <div>
                        <a href="https://www.youtube.com/watch?v=${bookmark.videoId}&t=${bookmark.timestamp}s" target="_blank">
                            <strong>${bookmark.videoTitle}</strong> - ${bookmark.timestamp}s
                        </a>
                        <p>📝 ${bookmark.note}</p>
                    </div>
                    <button class="delete-btn" data-index="${index}">🗑</button>
                `;
                bookmarksList.appendChild(div);
            });

            document.querySelectorAll(".delete-btn").forEach((btn) => {
                btn.addEventListener("click", (event) => {
                    const index = event.target.getAttribute("data-index");
                    bookmarks.splice(index, 1);
                    chrome.storage.sync.set({ bookmarks }, loadBookmarks);
                });
            });
        });
    }

    loadBookmarks();
});

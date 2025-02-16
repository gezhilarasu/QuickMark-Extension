# 📌 YouTube Bookmark Manager

## 📖 Overview
YouTube Bookmark Manager is a **Chrome extension** that allows you to save timestamps of YouTube videos with just one click. You can **easily revisit** important moments from your favorite videos, tutorials, or lectures without searching for them manually.

## 🎯 Objective
- ✅ Save YouTube timestamps with **one click**.
- ✅ Store bookmarks with **custom notes**.
- ✅ Quickly access saved timestamps with a **popup UI**.
- ✅ **Delete** bookmarks when no longer needed.

## 🔄 Workflow
1. **Install the extension** on your Chrome browser.
2. Click the **bookmark button** while watching a YouTube video.
3. The **timestamp and video title** will be saved automatically.
4. Open the extension popup to **view saved bookmarks**.
5. Click on any bookmark to **jump to the saved timestamp**.
6. **Delete** bookmarks if you no longer need them.

## 🛠️ Tech Stack
- **HTML** 🏗️ – For the popup UI.
- **CSS** 🎨 – For styling the popup.
- **JavaScript** 🚀 – To manage bookmarks and handle storage.
- **Chrome Storage API** 💾 – To store bookmarks.
- **Chrome Extensions API** 🔌 – To integrate with YouTube.

## 📂 Project Structure
```
📁 YouTube Bookmark Manager
├── 📄 manifest.json  # Chrome extension manifest file
├── 📄 background.js  # Handles extension installation
├── 📄 content.js  # Injects scripts into YouTube pages
├── 📄 popup.html  # Popup UI for bookmarks
├── 📄 popup.js  # Manages bookmark logic
├── 🎨 popup.css  # Styles the popup UI
├── 🎨 style.css  # Button hover styles
└── 🖼️ logo.png  # Extension icon
```

## 🚀 How to Install
1. **Download the code** or clone this repository.
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle at the top right corner).
4. Click **Load Unpacked** and select the project folder.
5. The **YouTube Bookmark Manager** extension is now installed! 🎉

## 📌 Usage
1. Open a **YouTube video**.
2. Click the **bookmark button** to save a timestamp.
3. Open the extension popup to **view all saved bookmarks**.
4. Click on a bookmark to **jump to that timestamp**.
5. Delete bookmarks if they are no longer needed.

## 🛠️ Future Improvements
- ⭐ Add a **search feature** to quickly find bookmarks.
- ⭐ Allow **tagging bookmarks** for better organization.
- ⭐ Sync bookmarks across **multiple devices**.

Happy Bookmarking! 🎬✨


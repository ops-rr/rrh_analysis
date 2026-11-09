// 只為了讓瀏覽器認定可安裝；不做任何快取，資料永遠從網路／Google Drive 即時讀取
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});

chrome.runtime.onInstalled.addListener(function () {
  const parent_menu = chrome.contextMenus.create({
    type: "normal",
    id: "parent",
    title: "ミリオンダイス"
  });
});



chrome.contextMenus.onClicked.addListener(function (e) {
  chrome.tabs.executeScript({
    file: "./dice.js"
  });
});

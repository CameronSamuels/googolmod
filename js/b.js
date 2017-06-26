var u = 0, el;
chrome.storage.sync.get("GoogolURL", function(c){u = c.GoogolURL});
function mycallback(info) {
    chrome.tabs.sendMessage(tabs[0].id, "getClickedEl", function(clickedEl) {
        clickedEl.src = u;
    });
}
chrome.contextMenus.removeAll();
var changeLogoContextMenu = chrome.contextMenus.create({title: "Change this logo", contexts:["image"], onclick: mycallback});
// alert(el.src);el.src=u;alert(el.src)
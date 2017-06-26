var u = 0, el;
chrome.storage.sync.get("GoogolURL", function(c){u = c.GoogolURL});
function mycallback(info, tab) {
    chrome.tabs.sendMessage(tab.id, "getClickedEl", function(clickedEl) {
        el = clickedEl;
    });
}
chrome.contextMenus.removeAll();
var changeLogoContextMenu = chrome.contextMenus.create({title: "Change this logo", contexts:["image"], onclick: function(){alert(el.src);el.src=u;alert(el.src)}});
var u = 0;
chrome.storage.sync.get("GoogolURL", function(c){u = c.GoogolURL});
chrome.contextMenus.removeAll();
var changeLogoContextMenu = chrome.contextMenus.create({title: "Change this logo", contexts:["image"], onclick: function(){alert(this.src);this.src=u;alert(this.src)}});
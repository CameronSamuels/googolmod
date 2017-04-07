function id(id) { return document.getElementById(id) }
function update() { 
	chrome.storage.sync.set({'GoogolURL': id('input').value});
	id('image').src = id('input').value;
}
chrome.storage.sync.get("GoogolURL", function(obj){id('input').value = obj.GoogolURL;});
chrome.storage.sync.get("GoogolURL", function(obj){id('image').src = obj.GoogolURL;});
id('button').onclick = function(){ update(); };
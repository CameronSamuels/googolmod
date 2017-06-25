function a(e) { return document.querySelector(e) }
function b() { 
	chrome.storage.sync.set({'GoogolURL': a('input').value});
	a('img').src = a('input').value;
}
chrome.storage.sync.get("GoogolURL", function(obj){a('input').value = obj.GoogolURL;});
chrome.storage.sync.get("GoogolURL", function(obj){a('img').src = obj.GoogolURL;});
a('div').onclick = b()
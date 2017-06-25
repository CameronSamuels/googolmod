function a(e) { return document.querySelector(e) }
function b() { 
	chrome.storage.sync.set({'GoogolURL': a('input').value});
	a('img').src = a('input').value
}
chrome.storage.sync.get("GoogolURL", function(e){a('input').value = e.GoogolURL;a('img').src = e.GoogolURL});
a('div').onclick = b
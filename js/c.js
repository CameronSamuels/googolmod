function a(d) { return document.getElementById(d) }
var u;
function b() {
	chrome.storage.sync.get("GoogolURL", function(c){
		u = c.GoogolURL;
	try {
		a('logocont').innerHTML = "<img id='gl1' src='" + u + "'>";
		a('gl1').style.width = "85px";
		a('gl1').style.height = "27.5px";
	} catch (ex) {}
	try {
		a('hplogo').src = u;
		a('hplogo').removeAttribute('srcset');
		a('hplogo').style.width = "340px";
		a('hplogo').style.height = "110px";
	} catch (ex) {}
	try {
		document.querySelectorAll(".logo")[0].innerHTML = "<img id='gl2' src='" + u + "'>";
		a('gl2').style.width = "170px";
		a('gl2').style.height = "55px";
	} catch (ex) {}
	try {
		a("logo").innerHTML = "<img id='gl3' src='" + u + "'>";
		a('gl3').style.width = "114px";
		a('gl3').style.height = "37px";
	} catch (ex) {}
	try {
		document.querySelectorAll(".product-logo")[0].innerHTML = "<img id='gl4' src='" + u + "'>";
		a('gl4').style.maxWidth = '105px';
		a('gl4').style.maxHeight = '34px';
	} catch (ex) {}
	try {
		document.querySelectorAll(".logo")[0].src = u;
	} catch (ex) {}
	});
}
b();
var clk = null;
document.addEventListener("mousedown", function(e){
    if(e.button == 2) clk = e.target;
}, true);
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "getClickedEl") {
        sendResponse({value: clk});
    }
});
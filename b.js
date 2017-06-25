chrome.storage.sync.get("GoogolURL", function(e){
function a(d) { return document.getElementById(d) }
function b() {
	chrome.storage.sync.get("GoogolURL", function(c){
		try {
			id('logocont').innerHTML = "<img id='gl1' src='" + c.GoogolURL + "' />";
			id('gl1').style.width = "85px";
			id('gl1').style.height = "27.5px";
		} catch (ex) {}
		try {
			id('hplogo').src = c.GoogolURL;
			id('hplogo').setAttribute('srcset', "");
			id('hplogo').style.width = "340px";
			id('hplogo').style.height = "110px";
		} catch (ex) {}
		try {
			document.querySelectorAll(".logo")[0].innerHTML = "<img id='gl2' src='" + c.GoogolURL + "' />";
			id('gl2').style.width = "170px";
			id('gl2').style.height = "55px";
		} catch (ex) {}
		try {
			document.querySelectorAll(".logo")[0].src = c.GoogolURL;
		} catch (ex) {}
	});
}
b();
});
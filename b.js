chrome.storage.sync.get("GoogolURL", function(e){
function id(id) { return document.getElementById(id) }
function load() {
	chrome.storage.sync.get("GoogolURL", function(obj){
		try {
			id('logocont').innerHTML = "<img id='theLogo1' src='" + obj.GoogolURL + "' />";
			id('theLogo1').style.width = "85px";
			id('theLogo1').style.height = "27.5px";
		} catch (ex) {}
		try {
			id('hplogo').src = obj.GoogolURL;
			id('hplogo').setAttribute('srcset', "");
			id('hplogo').style.width = "340px";
			id('hplogo').style.height = "110px";
		} catch (ex) {}
		try {
			document.querySelectorAll(".logo")[0].innerHTML = "<img id='theLogo2' src='" + obj.GoogolURL + "' />";
			id('theLogo2').style.width = "170px";
			id('theLogo2').style.height = "55px";
		} catch (ex) {}
		try {
			document.querySelectorAll(".logo")[0].src = obj.GoogolURL;
		} catch (ex) {}
	});
}
load();
});
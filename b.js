function a(d) { return document.getElementById(d) }
function b() {
	chrome.storage.sync.get("GoogolURL", function(c){
		try {
			a('logocont').innerHTML = "<img id='gl1' src='" + c.GoogolURL + "'>";
			a('gl1').style.width = "85px";
			a('gl1').style.height = "27.5px";
		} catch (ex) {}
		try {
			a('hplogo').src = c.GoogolURL;
			a('hplogo').setAttribute('srcset', "");
			a('hplogo').style.width = "340px";
			a('hplogo').style.height = "110px";
		} catch (ex) {}
		try {
			document.querySelectorAll(".logo")[0].innerHTML = "<img id='gl2' src='" + c.GoogolURL + "'>";
			a('gl2').style.width = "170px";
			a('gl2').style.height = "55px";
		} catch (ex) {}
		try {
			a("logo").innerHTML = "<img id='gl3' src='" + c.GoogolURL + "'>";
			a('gl3').style.width = "198px";
			a('gl3').style.height = "37px";
		} catch (ex) {}
		try {
			document.querySelectorAll(".logo")[0].src = c.GoogolURL;
		} catch (ex) {}
	});
}
b();
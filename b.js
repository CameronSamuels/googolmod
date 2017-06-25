chrome.storage.sync.get("GoogolURL", function(e){
	var googol = document.createElement("script");
googol.innerHTML = 'function id(id) { return document.getElementById(id) }\
function load() {\
		try {\
			id("logocont").innerHTML = \'<img id="theLogo1" src="" + GoogolURL + "" />\';\
			id("theLogo1").style.width = "85px";\
			id("theLogo1").style.height = "27.5px";\
		} catch (ex) {}\
		try {\
			id("hplogo").src = GoogolURL;\
			id("hplogo").setAttribute("srcset", "");\
			id("hplogo").style.width = "340px";\
			id("hplogo").style.height = "110px";\
		} catch (ex) {}\
		try {\
			document.querySelectorAll(".logo")[0].innerHTML = \'<img id="theLogo2" src="" + GoogolURL + "" />\';\
			id("theLogo2").style.width = "170px";\
			id("theLogo2").style.height = "55px";\
		} catch (ex) {}\
		try {\
			document.querySelectorAll(".logo")[0].src = GoogolURL;\
		} catch (ex) {}\
}\
function c(e) {\
    var d=new Image(),f = document.createElement("canvas");\
    f.style.display= "none";\
    document.body.appendChild(f);\
    d.onload = function() {\
        f.width = 340;\
        f.height = 110;\
        f.getContext("2d").drawImage(this, 0, 0);\
        return f.toDataURL();\
    };\
    d.src = e;\
}\
var GoogolURL = c(\'' + e.GoogolURL + '\');\
load();';
document.body.appendChild(googol);
});
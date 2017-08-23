function a(d) { return document.querySelector(d) }
function b() {
	chrome.storage.sync.get("a", function(c) {
		var u = c.a;
		try {
			a('#logocont').innerHTML = "<img id=gl1 src='" + u + "'>",
			a('#gl1').style.width = "85px",
			a('#gl1').style.height = "27.5px";
		} catch (e) {}
		try {
			let l = a('#hplogo');
			l.src = u,
			l.removeAttribute('srcset'),
			l.style.width = "340px",
			l.style.height = "110px";
		} catch (e) {}
		try {
			a(".logo").innerHTML = "<img id=gl2 src='" + u + "'>",
			a('#gl2').style.width = "170px",
			a('#gl2').style.height = "55px";
		} catch (e) {}
		try {
			a("#logo").innerHTML = "<img id=gl3 src='" + u + "'>",
			a('#gl3').style.width = "114px",
			a('#gl3').style.height = "37px";
		} catch (e) {}
		try {
			a(".product-logo").innerHTML = "<img id=gl4 src='" + u + "'>",
			a('#gl4').style.maxWidth = '105px',
			a('#gl4').style.maxHeight = '34px';
		} catch (e) {}
		try {
			setTimeout(function() {
				a('.gb_Xa').style.background = "url(" + u + ") center/contain no-repeat";
				a('.gb_Xa').style.opacity = 1;
			}, 5000);
		}
		catch (e) {}
		try {
			setTimeout(function() {
				document.styleSheets[0].insertRule(".gb_Xa:before { background: url(" +
					u + ") center/contain no-repeat; content: '' !important }", 0);
			}, 5000);
		}
		catch (e) {}
		try { a(".logo").src = u } catch (e) {}
	})
}
b()

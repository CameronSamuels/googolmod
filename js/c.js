function a(d) { return document.querySelector(d) }
function b() {
	chrome.storage.sync.get("a", function(c) {
		var u = c.a || "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNzUiPjxwYXRoIGQ9Ik00OS44IDUxLjRxLTMgMS40LTYuNyAyLjUtMy41IDEtNyAxLTQuMyAwLTgtMS40LTMuNy0xLjItNi4zLTMuNi0yLjYtMi40LTQtNi0xLjQtMy44LTEuNC04LjcgMC05IDUuMy0xNC4zUTI3IDE1LjggMzYgMTUuOHEzLjMgMCA2LjcuNyAzLjMuOCA3LjIgMi43djZoLS42cS0uNy0uNy0yLjItMS43LTEuNC0xLTMtMS42LTEuNi0xLTMuOC0xLjUtMi4zLS41LTUtLjUtNi40IDAtMTAgNC0zLjggNC4yLTMuOCAxMSAwIDcuNCA0IDExLjUgMy43IDQgMTAuNCA0IDIuNCAwIDQuOC0uNHQ0LjMtMXYtOS4zSDM0Ljd2LTQuNGgxNXoiIGZpbGw9IiMxZWFjZmYiLz48cGF0aCBkPSJNNzggNDBxMCA3LTMuNyAxMS0zLjUgNC05LjUgNHQtOS41LTRxLTMuNi00LTMuNi0xMXQzLjYtMTFxMy41LTQgOS41LTR0OS41IDRRNzggMzMgNzggNDB6bS01IDBxMC01LjUtMi4yLTguMi0yLTIuNi02LTIuNi0zLjggMC02IDIuNi0yIDIuNy0yIDguMiAwIDUuNCAyIDggMi4yIDMgNiAzdDYtM3EyLjItMi42IDIuMi04eiIgZmlsbD0iIzRiYmUzNyIvPjxwYXRoIGQ9Ik0xMDYgNDBxMCA3LTMuNCAxMS0zLjYgNC05LjUgNC02IDAtOS40LTRUODAgNDBxMC03IDMuNS0xMSAzLjYtNCA5LjYtNHQ5LjcgNHEzLjUgNCAzLjUgMTF6bS00LjggMHEwLTUuNS0yLTguMi0yLjMtMi42LTYtMi42LTQgMC02IDIuNlE4NSAzNC41IDg1IDQwcTAgNS40IDIgOCAyIDMgNiAzdDYtM3EyLTIuNiAyLTh6IiBmaWxsPSIjZmUxMjE5Ii8+PHBhdGggZD0iTTEzMy43IDUxcTAgNy0zLjMgMTAuNS0zLjIgMy40LTEwIDMuNC0yLjMgMC00LjQtLjUtMi4yLS40LTQuMi0xVjU5aC4ybDMuNyAxcTIuNS44IDUgLjh0NC0uNnExLjctLjYgMi42LTEuNiAxLTEgMS4zLTIuNHQuNC0zdi0yLjdxLTIuMiAxLjctNC4yIDIuNi0yIC44LTUgLjgtNSAwLTgtMy42dC0zLTEwLjNxMC0zLjcgMS02LjQgMS0yLjYgMi44LTQuNSAxLjctMiA0LTMgMi40LTEgNC43LTEgMi41IDAgNCAuNyAxLjguNSAzLjYgMS41VjI2aDQuNnptLTQuOC00LjZWMzFxLTItMS0zLjctMS4zLTEuNi0uNC0zLjMtLjQtMy44IDAtNiAyLjctMi4zIDIuNi0yLjMgNy42IDAgNC44IDEuNyA3LjNRMTE3IDQ5IDEyMSA0OXEyIDAgNC0uOHQ0LTJ6IiBmaWxsPSIjZmY5NzAyIi8+PHBhdGggZD0iTTE2MyA0MHEwIDctMy41IDExdC05LjUgNHEtNiAwLTkuNS00LTMuNi00LTMuNi0xMXQzLjQtMTEgOS41LTRxNiAwIDkuNCA0IDMuNiA0IDMuNiAxMXptLTUgMHEuMi01LjUtMi04LjItMi4yLTIuNi02LTIuNi00IDAtNiAyLjYtMi4yIDIuNy0yLjIgOC4yIDAgNS40IDIuMiA4IDIuMiAzIDYgM3Q2LTNxMi0yLjYgMi04eiIgZmlsbD0iIzFlYWNmZiIvPjxwYXRoIGQ9Ik0xNzAuNCA1NWgtNC43VjE1LjRoNC43eiIgZmlsbD0iIzRiYmUzNyIvPjxwYXRoIGQ9Ik0yMjAuNiA1NGgtNVYyMS42bC0xMC42IDIyaC0zbC0xMC40LTIyVjU0SDE4N1YxNi40aDYuOGwxMCAyMSA5LjgtMjFoN3ptMzMuOC0xNHEwIDctMy41IDExdC05LjcgNHEtNiAwLTkuNi00LTMuNS00LTMuNS0xMXQzLjUtMTFxMy42LTQgOS42LTR0OS41IDRxMy40IDQgMy40IDExem0tNSAwcTAtNS41LTItOC4yLTIuMi0yLjctNi0yLjctNCAwLTYgMy0yLjIgMi42LTIuMiA4dDIuMiA4cTIgMyA2IDMgMy44IDAgNi0zIDItMi42IDItOHptMzUuNCAxNEgyODB2LTNxLTIgMi00LjMgMy0yLjIgMS00LjggMS01LjMgMC04LjMtNC0zLTQtMy0xMSAwLTMuNSAxLTYuM3QyLjgtNC44cTEuOC0yIDQtMyAyLjQtMSA0LjgtMSAyLjIgMCA0IC40IDEuNy40IDMuNiAxLjRWMTQuNmg0Ljd6bS00LjgtN1YzMXEtMi0xLTMuNC0xLjMtMS42LS40LTMuNC0uNC00IDAtNi4yIDIuOC0yLjIgMy0yLjIgOHQxLjcgNy44cTEuNyAyLjYgNS41IDIuNiAyIDAgNC0xIDIuMi0uOCA0LTIuMnoiIGZpbGw9IiNiYmIiLz48L3N2Zz4=";
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

function a(e) { return document.querySelector(e) }
function b() { 
	chrome.storage.sync.set({'GoogolURL': c(a('input').value)});
	a('img').src = c(a('input').value)
}
function c(url) {
    var img = new Image();

    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        alert(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    };

    img.src = url;
}
chrome.storage.sync.get("GoogolURL", function(e){a('input').value = e.GoogolURL;a('img').src = e.GoogolURL});
a('div').onclick = b